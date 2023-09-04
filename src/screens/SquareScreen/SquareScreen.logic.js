import { useState, useEffect, useRef } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import {
  getPlatformDetail,
  getSquareDetail,
} from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";
import { ContentSlection } from "../../components/MenuSelection/MenuSelection.style";
import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth;

export const squareScreenLogic = (props) => {
  const _dispatch = useDispatch();
  // Variable state type time
  const [typeTime, setTypeTime] = useState(TypeTime.ALL_TIME);
  const platformSelected = useSelector((state) => state.platformSelected);
  const [dataRankUser, setDataRankUser] = useState({});
  const [pageCurrent, setPageCurrent] = useState(1);

  const contentRef = useRef(null);

  const [dataRankList, setDataRankList] = useState([]);
  useEffect(() => {
    const getDetailSquare = async () => {
      if (platformSelected.platform) {
        const detail = await getSquareDetail(
          platformSelected.platform,
          pageCurrent,
          10,
          typeTime
        );
        _dispatch(setDetailPlatform(detail.slice(0, -1)));
        setDataRankList(detail.slice(0, -1));
        detail.map((data) => {
          data.is_user == 1 && setDataRankUser(data);
        });
      }
    };

    getDetailSquare();
  }, []);

  // const [dataRankList, setDataRankList] = useState([
  //   {
  //     ranking: 4,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 4500,
  //   },
  //   {
  //     ranking: 5,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 4444,
  //   },
  //   {
  //     ranking: 6,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 4242,
  //   },
  //   {
  //     ranking: 7,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 4000,
  //   },
  //   {
  //     ranking: 8,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 3900,
  //   },
  //   {
  //     ranking: 9,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 3800,
  //   },
  //   {
  //     ranking: 10,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 3700,
  //   },
  //   {
  //     ranking: 32,
  //     imgUrl: "/avtRankLower.png",
  //     name: "@playername",
  //     diamond: 2243,
  //     is_user: 1,
  //   },
  // ]);

  // Func handle change type time

  const handleChangeTypeTime = async (typeSelected) => {
    setPageCurrent(1);
    setTypeTime(typeSelected);
    const detail = await getSquareDetail(
      platformSelected.platform,
      1,
      10,
      typeSelected
    );

    if (detail?.slice(0, -1)?.length > 0) {
      console.log(detail);
      _dispatch(setDetailPlatform(detail.slice(0, -1)));
      setDataRankList(detail.slice(0, -1));
      detail.map((data) => {
        data.is_user == 1 && setDataRankUser(data);
      });
    }
  };

  // Scroll Content
  const handleScrollContent = async () => {
    if (contentRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = contentRef.current;
      console.log(scrollHeight);

      if (scrollHeight - scrollTop == clientHeight) {
        console.log("scrolled");
        const detail = await getSquareDetail(
          platformSelected.platform,
          pageCurrent + 1,
          10,
          typeTime
        );

        console.log(detail);

        if (detail?.slice(0, -1)?.length > 0) {
          console.log(detail);
          setPageCurrent(pageCurrent + 1);
          setDataRankList((prev) => prev.concat(detail.slice(0, -1)));
        }
      }
    }
  };

  return {
    typeTime,
    dataRankList,
    platformSelected,
    dataRankUser,
    contentRef,
    handleChangeTypeTime,
    handleScrollContent,
  };
};
