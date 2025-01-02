import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useLogin } from "./Login.biz";
import { persianToEnglishNumbers } from "@/utils/convertNumber/ConvertNumber";

interface ILogin {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
export const Login = ({ isOpen = true, onOpen, onClose }: ILogin) => {
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
    <Box color="amir.mainBg" p="4">
      <Flex mb="4">
        <Text color={"amir.common"}>شماره تلفن خود را وارد کنید</Text>
      </Flex>
      <Input
        mb="4"
        placeholder="09123456789"
        dir="ltr"
        color="amir.common"
        _placeholder="amir.common"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(persianToEnglishNumbers(e.target.value));
          errorMessage && setErrorMessage("");
        }}
      />
      {errorMessage && (
        <Text mb="4" color="red">
          {errorMessage}
        </Text>
      )}
      <Button
        bg={"amir.primary"}
        w={"100%"}
        onClick={handleSetPhoneNumber}
        isLoading={loading}
      >
        ارسال
      </Button>
    </Box>
  );
};

const OtpStep = ({ otp, setOtp, handleSendOtp ,loading}: any) => {
  return (
    <Box mx="auto" p="4">
      <Text>کد ارسال شده را وارد کنید</Text>
      <HStack my="6" justifyContent={"space-around"} mx="8" dir="ltr">
        <PinInput value={otp} onChange={setOtp}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button
        my="2"
        isDisabled={otp.length !== 4}
        isLoading={loading}
        bg={"amir.primary"}
        w={"100%"}
        onClick={handleSendOtp}
      >
        ورود
      </Button>
    </Box>
  );
};
