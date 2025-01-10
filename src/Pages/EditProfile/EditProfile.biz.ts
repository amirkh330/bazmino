import { CallApi, PostApi } from "@/settings/axiosConfig";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  avatar: FileList | null;
  fullName: string;
  email: string;
  sex: string;
  birthDate: string;
};
export const useEditProfile = () => {
  const [data, setData] = useState();
  useEffect(() => {
    CallApi.get("/me/profile").then(({ data }) => {
      setData(data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors,  },
  } = useForm<FormData>();
  const toast = useToast();
  const navigate = useNavigate();
  const avatarFile = watch("avatar");

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

  return { handleSubmit, onSubmit, avatarFile, register, errors, control };
};
