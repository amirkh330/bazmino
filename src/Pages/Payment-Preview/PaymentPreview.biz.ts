import { CallApi } from "@/settings/axiosConfig";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const usePaymentPreview = () => {
  const { id } = useParams();
  const [discount, setDiscount] = useState("");
  const [discountCode, setDiscountCode] = useState<string>("");
  const [msgError, setMsgError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState<Item>({
    discountCodeAmount: 0,
    eventDiscountAmount: 0,
    finalAmount: 0,
    totalAmount: 0,
    walletPayableAmount: 0,
  });
  type Item = {
    discountCodeAmount: number;
    eventDiscountAmount: number;
    finalAmount: number;
    totalAmount: number;
    walletPayableAmount: number;
  };

  useEffect(() => {
    setLoading(true);
    CallApi.post(`/orders/${id}/_checkout`, {
      discountCode: discountCode,
    })
      .then(({ data }) => {
        setItem(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [discountCode]);

  const handlePayment = () => {
    CallApi.post(`/orders/${id}/payments`).then(({ data }) => {
      window.location.href = data;
    });
  };

  const handleSubmitSetDiscount = () => {
    setMsgError(false);
    CallApi.post(`/discount-codes/_verify`, { code: discount })
      .then(({ data }) => {
        setDiscountCode(discount);
      })
      .catch((err) => {
        setMsgError(true);
      });
  };
  return {
    discount,
    handlePayment,
    handleSubmitSetDiscount,
    setDiscount,
    item,
    msgError,
    loading,
  };
};
