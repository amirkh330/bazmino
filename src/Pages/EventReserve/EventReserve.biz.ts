import { CallApi } from "@/settings/axiosConfig";
import { phoneRegex } from "@/utils/Regex/Regex";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useEventReserve = () => {
  const { timeId, eventId, dateId } = useParams();
  const [value, setValue] = useState<string>("");
  const [errMsg, setErrMsg] = useState<boolean>(false);
  const [phoneNumberList, setPhoneNumberList] = useState(["09385440212"]);

  const handleDeletePhoneNumber = (index: number) => {
    const updatedPhoneNumbers = [...phoneNumberList];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumberList(updatedPhoneNumbers);
  };

  const handleAddPhoneNumber = () => {
    if (phoneRegex.test(value)) {
      setValue("");
      setPhoneNumberList([...phoneNumberList, value]);
    } else {
      setErrMsg(true);
    }
  };

  const handleSubmit = () => {
    CallApi.post(`/events/${eventId}/dates/${dateId}/times/${timeId}/orders`, {
      phoneNumbers: phoneNumberList,
    }).then((res) => {
      console.log(res);
    });
  };
  return {
    errMsg,
    setErrMsg,
    phoneNumberList,
    value,
    setValue,
    handleDeletePhoneNumber,
    handleAddPhoneNumber,
    handleSubmit,
  };
};
