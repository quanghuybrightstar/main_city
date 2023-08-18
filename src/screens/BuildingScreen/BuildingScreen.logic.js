/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../apis/APIConstant";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";

export const buildingLogic = (props) => {
  const _dispatch = useDispatch();
  const platformSelected = useSelector((state) => state.platformSelected);

  console.log(platformSelected.platform);
  const [dataVoucher, setDataVoucher] = useState([]);
  const [sideDataVoucher, setSideDataVoucher] = useState([]);
  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));
        setDataVoucher(detail);
        setSideDataVoucher(detail);
      }
    };

    getDetailPlatform();
  }, []);

  const [timeSort, setTimeSort] = useState("Mới nhất");
  const [nameGift, setNameGift] = useState("Tất cả");

  const [isOpenSelectTime, setIsOpenSelectTime] = useState(false);
  const [isOpenSelectGift, setIsOpenSelectGift] = useState(false);

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

  const handleChangeFilterGift = (data) => {
    setNameGift(data.name);
    setIsOpenSelectGift(false);
    setIsOpenSelectTime(false);
    if (data.type == "all") {
      setDataVoucher(sideDataVoucher);
    } else {
      let filterDataVoucher = sideDataVoucher;
      filterDataVoucher = filterDataVoucher.filter(
        (voucher) => voucher.item_category == data.type
      );
      setDataVoucher(filterDataVoucher);
    }
  };

  return {
    timeSort,
    nameGift,
    dataVoucher,
    isOpenSelectTime,
    isOpenSelectGift,
    platformSelected,
    handleChangeFilterTime,
    handleOpenSelectModal,
    handleChangeFilterGift,
  };
};
