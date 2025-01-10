import React, { useRef, useState } from "react";
import { Footer } from "@/components/Common/Footer/Footer";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  VStack,
  Avatar,
  Box,
  Text,
  chakra,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { useEditProfile } from "./EditProfile.biz";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";
import { Camera } from "@phosphor-icons/react/dist/ssr";

export const EditProfile = () => {
  const { handleSubmit, onSubmit, avatarFile, register, errors, control } =
    useEditProfile();

  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <chakra.div
      pt="4"
      h="calc(100dvh - 56px)"
      display="flex"
      flexDirection="column"
      m="0"
      justifyContent="space-between"
    >
      <chakra.div m="0" overflow="auto" mb="4" px="4" color="amir.common">
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            {/* Avatar */}
            <FormControl>
              <Center>
                <Avatar w={"80px"} h={"80px"} onClick={handleAvatarClick} />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </Center>
            </FormControl>

            {/* Name */}
            <FormControl isInvalid={!!errors.fullName}>
              <FormLabel>نام کاربری</FormLabel>
              <Input
                type="text"
                placeholder="نام خود را وارد کنید"
                {...register("fullName")}
              />
              {errors.fullName && (
                <Text color="red.500">{errors.fullName.message}</Text>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>شماره موبایل</FormLabel>
              <Input value={"09385440212"} isDisabled />
            </FormControl>

            {/* Email */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>ایمیل</FormLabel>
              <Input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "ایمیل نامعتبر است",
                  },
                })}
              />
              {errors.email && (
                <Text color="red.500">{errors.email.message}</Text>
              )}
            </FormControl>

            {/* Gender */}
            <FormControl>
              <FormLabel>جنسیت</FormLabel>
              <Select {...register("sex")}>
                <option value="Man">مرد</option>
                <option value="Woman">زن</option>
              </Select>
            </FormControl>

            {/* Birth Date */}
            <FormControl>
              <FormLabel>تاریخ تولد</FormLabel>
              <Controller
                name="birthDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    // {...field}
                    onChange={field.onChange}
                    value={field.value}
                    containerStyle={{
                      width: "100%",
                    }}
                    style={{
                      width: "100%",
                      height: "40px",
                      backgroundColor: "transparent",
                    }}
                    calendar={persian}
                    locale={persian_fa}
                  />
                )}
              />
              {errors.birthDate && (
                <Text color="red.500">{errors.birthDate.message}</Text>
              )}
            </FormControl>

            <Button type="submit" bgColor={"amir.primary"} width="full">
              ثبت تغییرات
            </Button>
          </VStack>
        </form>
      </chakra.div>
      <Footer />
    </chakra.div>
  );
};
