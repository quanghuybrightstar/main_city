import { useState, useEffect, useRef } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import { setDetailPlatform } from "../../redux/actions/actions";
import { ContentSlection } from "../../components/MenuSelection/MenuSelection.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";

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
  const [isLoadMore, setLoadMore] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const hasDuplicates = (array1, array2) => {
    var combinedArray = array1.concat(array2);
    return new Set(combinedArray).size !== combinedArray.length;
  };

  const getSquareDetail = async (platform, page, limit, filter) => {
    try {
      let dataResult = [];
      let uriApi = `${API.baseURL}${API.squareDetail}?id_platform=${
        platform.id
      }&page=${page}&limit=${limit || 10}&filter=${filter || "all"}`;
      // console.log(platform);

      if ((pageCurrent != page || page == 1) && !isLoading) {
        setLoading(true);
        const result = await APIBase.apiCaller("GET", uriApi);
        if (result?.status) {
          // console.log(result);
          if (!hasDuplicates(dataRankList, result?.data)) {
            setLoading(false);
            setLoadMore(result.data?.length - 1 == limit);
            dataResult = result.data;
            setPageCurrent(page);
          }
        }
      }

      return dataResult;
    } catch (e) {
      // console.log(e);
    }
  };

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
      // console.log(detail);
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
      // console.log(scrollHeight);

      if (
        scrollHeight - scrollTop < clientHeight + 5 * baseWidth &&
        isLoadMore
      ) {
        const detail = await getSquareDetail(
          platformSelected.platform,
          pageCurrent + 1,
          10,
          typeTime
        );

        if (detail?.slice(0, -1)?.length > 0) {
          // console.log(detail);
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
