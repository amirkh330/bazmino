import BottomSheet from "@/components/CoreComponnets/BottomSheet/BottomSheet";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLogin } from "./Login.biz";

interface ILogin {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const Login = ({ isOpen, onOpen, onClose }: ILogin) => {
  const {
    handleSendOtp,
    handleSetPhoneNumber,
    phoneNumber,
    setPhoneNumber,
    setStep,
    otp,
    loading,
    setLoading,
    step,
    errorMessage,
    handleReset,
    setOtp,
    handleVerifyOtp,
    setErrorMessage,
  } = useLogin();

  if (!isOpen) return null;
  console.log(step);

  return (
    <BottomSheet
      title="ورود"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={() => {
        onClose();
        handleReset();
      }}
    >
      {step === "phone" ? (
        <PhoneNumberStep
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          errorMessage={errorMessage}
          loading={loading}
          setLoading={setLoading}
          setErrorMessage={setErrorMessage}
          handleSetPhoneNumber={handleSetPhoneNumber}
        />
      ) : (
        <OtpStep
          otp={otp}
          setOtp={setOtp}
          handleSendOtp={handleVerifyOtp}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </BottomSheet>
  );
};
const PhoneNumberStep = ({
  phoneNumber,
  setPhoneNumber,
  handleSetPhoneNumber,
  errorMessage,
  setErrorMessage,
  loading,
}: any) => {
  return (
    <Box>
      <Flex mb="4">
        <Text>شماره تلفن خود را وارد کنید</Text>
      </Flex>
      <Input
        mb="4"
        placeholder="09123456789"
        dir="ltr"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
          errorMessage && setErrorMessage("");
        }}
      />
      {errorMessage && (
        <Text mb="4" color="red">
          {errorMessage}
        </Text>
      )}
      <Button colorScheme="blue" w={"100%"} onClick={handleSetPhoneNumber} isLoading={loading}>
        ارسال
      </Button>
    </Box>
  );
};

const OtpStep = ({ otp, setOtp, handleSendOtp }: any) => {
  return (
    <Box>
      <Text>کد ارسال شده را وارد کنید</Text>
      <HStack my="4" justifyContent={"space-around"} mx="8" dir="ltr">
        <PinInput value={otp} onChange={setOtp}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button colorScheme="blue" w={"100%"} onClick={handleSendOtp}>
        ورود
      </Button>
    </Box>
  );
};
