import { useState, useEffect } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";

export const wheelScreenLogic = (props) => {
  const _dispatch = useDispatch();

  const [dataWheel, setDataWheel] = useState({ tickets_remaining: 3 });

  const platformSelected = useSelector((state) => state.platformSelected);
  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));
      }
    };

    getDetailPlatform();
  }, []);

  const handleSpinWheel = () => {
    setDataWheel({
      tickets_remaining: dataWheel.tickets_remaining - 1,
    });
  };

  return { dataWheel, platformSelected,handleSpinWheel };
};
