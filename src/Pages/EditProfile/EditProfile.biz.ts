import { CallApi, PostApi } from "@/settings/axiosConfig";
import { useToast } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  avatar: File | null;
  fullName: string;
  email: string;
  sex: string;
  birthDate: string;
};
export const useEditProfile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState();

  useEffect(() => {
    CallApi.get("/me/profile").then(({ data }) => {
      setData(data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const toast = useToast();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    PostApi.put("/me/profile", formData).then(({ data }) => {
      navigate("/profile");
      toast({
        title: "فرم با موفقیت ارسال شد!",
        status: "success",
        duration: 3000,
        position: "top",
      });
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue("avatar", file);
      };
      setValue("avatar", file);
    }
  };

  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    errors,
    control,
    onSubmit,
    register,
    fileInputRef,
    handleSubmit,
    handleAvatarClick,
    handleImageUpload,
  };
};
