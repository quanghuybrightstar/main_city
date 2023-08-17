import { useState } from "react";

export const buildingLogic = (props) => {
  const [timeSort, setTimeSort] = useState("Mới nhất");
  const [typeGift, setTypeGift] = useState("Tất cả");

  const [isOpenSelectTime, setIsOpenSelectTime] = useState(false);
  const [isOpenSelectGift, setIsOpenSelectGift] = useState(false);

  const [dataVoucher, setDataVoucher] = useState([
    {
      id: 1,
      imgURL: "/airline.png",
      name: "Voucher 500.000 đ",
      detail:
        "e-Voucher trị giá 500.000 đ khi thanh toán đặt trước vé máy bay các chuyến nội địa.",
    },
    {
      id: 2,
      imgURL: "/hotel.png",
      name: "Voucher Ưu đãi",
      detail:
        "2 ngày tận hưởng dịch vụ miễn phí tại Khách sạn Mường Thanh - Nha Trang.",
    },
    {
      id: 3,
      imgURL: "/tour.png",
      name: "Voucher Ưu đãi",
      detail:
        "Tặng 20% giá trị khi tham gia tận hưởng tour du lịch tại Phú Quốc 2 ngày 1 đêm.",
    },
  ]);

  const handleOpenSelectModal = (type) => {
    if (type == "time") {
      setIsOpenSelectTime(!isOpenSelectTime);
      setIsOpenSelectGift(false);
    } else if (type == "gift") {
      setIsOpenSelectGift(!isOpenSelectGift);
      setIsOpenSelectTime(false);
    } else {
      console.log("123");
      setIsOpenSelectGift(false);
      setIsOpenSelectTime(false);
    }
  };

  const handleChangeFilterTime = (type) => {
    setTimeSort(type);
    setIsOpenSelectGift(false);
    setIsOpenSelectTime(false);
  };

  const handleChangeFilterGift = (type) => {
    setTypeGift(type);
    setIsOpenSelectGift(false);
    setIsOpenSelectTime(false);
  };

  return {
    timeSort,
    typeGift,
    dataVoucher,
    isOpenSelectTime,
    isOpenSelectGift,
    handleChangeFilterTime,
    handleOpenSelectModal,
    handleChangeFilterGift,
  };
};
