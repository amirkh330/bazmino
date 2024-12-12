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

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtpKey, setServerOtpKey] = useState(null);
  const [step, setStep] = useState("phone");

  const handleSendOtp = async () => {
    try {
      // Replace with your API call for sending OTP
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/auth/_init`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ loginIdentifier: phoneNumber }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setServerOtpKey(data.otpKey); // Assuming the server responds with an OTP key
        setStep("otp");
        onOpen();
      } else {
        throw new Error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Replace with your API call for verifying OTP
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber,
          otp,
          otpKey: serverOtpKey,
        }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        onClose();
      } else {
        alert(data.message || "Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP.");
    }
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

export default Login;
