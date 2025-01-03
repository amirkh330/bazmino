import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtpKey, setServerOtpKey] = useState(null);
  const [step, setStep] = useState("phone");
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/auth/_init`, {
        loginIdentifier: phoneNumber,
      })
      .then(({ data }) => {
        setServerOtpKey(data);
        setStep("otp");
        onOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVerifyOtp = async () => {
    axios
      .post(`${import.meta.env.VITE_APP_BASE_URL}/auth/_authenticate`, {
        otp,
        code: serverOtpKey,
      })
      .then(({ data }) => {
        window.location.replace(
          `${import.meta.env.VITE_APP_BASE_URL}/auth/_authorize?code=${data}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box p={4} maxW="400px" mx="auto">
      {step === "phone" && (
        <>
          <Text mb={2}>Enter your phone number:</Text>
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            type="number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            mb={4}
          />
          <Button colorScheme="blue" onClick={handleSendOtp}>
            Send OTP
          </Button>
        </>
      )}

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify OTP</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>Enter the OTP sent to your phone:</Text>
            <Input
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              mb={4}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleVerifyOtp} mr={3}>
              Verify
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Login2;
