/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../apis/APIConstant";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";

export const buildingLogic = (props) => {
  const _dispatch = useDispatch();
  const platformSelected = useSelector((state) => state.platformSelected);
  const [dataVoucher, setDataVoucher] = useState([]);
  const [sideDataVoucher, setSideDataVoucher] = useState([]);

  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));

        const detailAvailable = detail.filter(
          (data) =>
            data?.quantity_available > 0 && data?.item_category != "diamond"
        );

        const dataVoucherFiltered = detailAvailable.sort((a, b) => {
          return new Date(b.time_upload) - new Date(a.time_upload);
        });

        setDataVoucher(dataVoucherFiltered);
        setSideDataVoucher(dataVoucherFiltered);
      }
    };

    getDetailPlatform();
  }, []);

  const [timeSort, setTimeSort] = useState({
    id: 1,
    name: "Mới nhất",
    type: "new",
  });
  const [nameGift, setNameGift] = useState({
    id: 1,
    name: "Tất cả",
    type: "all",
  });

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

  const handleFilterTime = (array, type) => {
    let filterDataVoucher = [];
    if (type == "new") {
      filterDataVoucher = array.sort((a, b) => {
        return new Date(b.time_upload) - new Date(a.time_upload);
      });
    } else if (type == "old") {
      filterDataVoucher = array.sort((a, b) => {
        return new Date(a.time_upload) - new Date(b.time_upload);
      });
    }

    return filterDataVoucher;
  };

  const handleFilterGift = (array, type) => {
    if (type == "all") {
      return array;
    } else {
      let filterDataVoucher = array;
      filterDataVoucher = filterDataVoucher.filter(
        (voucher) => voucher.item_category == type
      );

      return filterDataVoucher;
    }
  };

  const handleChangeFilterTime = (data) => {
    setTimeSort(data);
    setIsOpenSelectGift(false);
    setIsOpenSelectTime(false);

    const filterDataGift = handleFilterGift(sideDataVoucher, nameGift.type);
    const filterDataTime = handleFilterTime(filterDataGift, data.type);

    setDataVoucher(filterDataTime);
  };

  const handleChangeFilterGift = (data) => {
    setNameGift(data);
    setIsOpenSelectGift(false);
    setIsOpenSelectTime(false);

    const filterDataTime = handleFilterTime(sideDataVoucher, timeSort.type);
    const filterDataGift = handleFilterGift(filterDataTime, data.type);

    setDataVoucher(filterDataGift);
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
