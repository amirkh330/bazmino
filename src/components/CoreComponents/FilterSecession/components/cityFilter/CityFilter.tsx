import BottomSheet from "@/components/CoreComponents/BottomSheet/BottomSheet";
import { Box, Button, Checkbox, Flex, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCityFilter } from "./CityFilter.biz";
import { useSearchParams } from "react-router-dom";

export const CityFilter = ({ handleFilterChange }: any) => {
  const { whereFilterVisible, setWhereFilterVisible } = useCityFilter();
  const list = [
    { id: -1, title: "همه" },
    { id: 1, title: "نارمک" },
    { id: 2, title: "هروی" },
    { id: 3, title: "جردن" },
    { id: 4, title: "ری" },
    { id: 5, title: "شمیران" },
    { id: 6, title: "پونک" },
    { id: 7, title: "قیطریه" },
    { id: 8, title: "صادقیه" },
    { id: 9, title: "تهرانپارس" },
    { id: 10, title: "سعادت‌آباد" },
    { id: 11, title: "ونک" },
    { id: 12, title: "ازگل" },
    { id: 13, title: "زعفرانیه" },
    { id: 14, title: "فرمانیه" },
    { id: 15, title: "شهرک غرب" },
    { id: 16, title: "مرزداران" },
    { id: 17, title: "آریاشهر" },
    { id: 18, title: "میرداماد" },
    { id: 19, title: "درکه" },
    { id: 20, title: "نیاوران" },
    { id: 21, title: "اوین" },
    { id: 22, title: "شهر ری" },
    { id: 23, title: "مجیدیه" },
    { id: 24, title: "خاوران" },
    { id: 25, title: "افسریه" },
    { id: 26, title: "جیحون" },
    { id: 27, title: "آزادی" },
    { id: 28, title: "دولت" },
    { id: 29, title: "شمیرانات" },
    { id: 30, title: "سوهانک" },
    { id: 31, title: "بریانک" },
    { id: 32, title: "دزاشیب" },
    { id: 33, title: "دولت‌آباد" },
    { id: 34, title: "شریعتی" },
    { id: 35, title: "باغ فیض" },
    { id: 36, title: "فرحزاد" },
    { id: 37, title: "شوش" },
    { id: 38, title: "لویزان" },
    { id: 39, title: "میدان ولیعصر" },
    { id: 40, title: "یوسف‌آباد" },
    { id: 41, title: "عباس‌آباد" },
    { id: 42, title: "طرشت" },
    { id: 43, title: "امیرآباد" },
    { id: 44, title: "پیروزی" },
    { id: 45, title: "کارگر شمالی" },
    { id: 46, title: "کارگر جنوبی" },
    { id: 47, title: "پاسداران" },
    { id: 48, title: "حکیمیه" },
    { id: 49, title: "نیرو هوایی" },
    { id: 50, title: "مولوی" },
    { id: 51, title: "بهارستان" },
    { id: 52, title: "فاطمی" },
    { id: 53, title: "خیابان انقلاب" },
    { id: 54, title: "امام حسین" },
    { id: 55, title: "پاسگاه نعمت‌آباد" },
    { id: 56, title: "ده ونک" },
    { id: 57, title: "شهران" },
    { id: 58, title: "چیتگر" },
    { id: 59, title: "بلوار فردوس" },
    { id: 60, title: "ستارخان" },
  ];
  const toast = useToast();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheckboxChange = (id: number) => {
    if (id === -1) {
      // اگر "همه" کلیک شود
      if (selectedItems.includes(-1)) {
        setSelectedItems([]); // همه را غیرفعال کن
      } else {
        setSelectedItems(list.map((item) => item.id));
        // .filter((id) => id !== -1)); // همه را فعال کن
      }
    } else {
      const newSelection = selectedItems.includes(id)
        ? selectedItems.filter((item) => item !== id)
        : [...selectedItems, id];

      setSelectedItems([...newSelection]);
    }
  };

  const isAllChecked = selectedItems.length === list.length;

  const isIndeterminate = selectedItems.includes(-1) && !isAllChecked;

  const handleSelect = () => {
    selectedItems.map((item, index) => {
      if (item) {
        searchParams.set(`city${index + 1}`, String(item));
      } else {
        searchParams.delete(`city${index + 1}`);
      }
      setSearchParams(searchParams);
    });

    setWhereFilterVisible(false);
  };
  return (
    <div>
      <Box {...boxStyles} onClick={() => setWhereFilterVisible(true)}>
        <Text fontSize={"16px"}>کجا بریم؟</Text>
      </Box>
      <BottomSheet
        title={"کجا بازی کنیم؟"}
        isOpen={whereFilterVisible}
        onOpen={() => {}}
        onClose={() => setWhereFilterVisible(false)}
      >
        <Box p="4" m="0" maxH={"65vh"} overflow="auto">
          <Flex m="0" gap="2" alignItems="start" flexDirection="column">
            {list.map((item) => (
              <Checkbox
                key={item.id}
                value={item.id}
                isIndeterminate={item.id == -1 ? isIndeterminate : false}
                isChecked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
                sx={{
                  ".chakra-checkbox__control": {
                    borderColor: "amir.primary",
                    _checked: {
                      bg: "amir.primary",
                      borderColor: "amir.primary",
                    },
                    isIndeterminate: {
                      bg: "amir.primary",
                      borderColor: "amir.primary",
                    },
                  },
                }}
                mx="0"
              >
                <Text color="amir.common" fontSize={"16px"} mx="0">
                  {item.title}
                </Text>
              </Checkbox>
            ))}
          </Flex>
        </Box>
        <Box mx="4" py="4">
          <Button
            bgColor="amir.primary"
            color="amir.secondaryBg"
            w="100%"
            isDisabled={selectedItems.length === 0}
            onClick={handleSelect}
          >
            انتخاب
          </Button>
        </Box>
      </BottomSheet>
    </div>
  );
};
const boxStyles = {
  w: "92",
  borderRadius: "6px",
  p: "4",
  border: "1px",
  cursor: "pointer",
  color: "amir.common",
  borderColor: "amir.secondaryVariant",
};
