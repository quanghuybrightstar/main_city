import { useState, useEffect, useRef } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";

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
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(
          platformSelected.platform,
          pageCurrent,
          10
        );
        _dispatch(setDetailPlatform(detail.slice(0, -1)));
        setDataRankList(detail.slice(0, -1));
        detail.map((data) => {
          data.is_user == 1 && setDataRankUser(data);
        });
      }
    };

    getDetailPlatform();
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
  const handleChangeTypeTime = (typeSelected) => {
    setTypeTime(typeSelected);
  };

  // Scroll Content
  const handleScrollContent = async () => {
    if (contentRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = contentRef.current;
      if (scrollTop + clientHeight == scrollHeight) {
        const detail = await getPlatformDetail(
          platformSelected.platform,
          pageCurrent + 1,
          10
        );

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
