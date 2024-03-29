import { useState, useEffect } from "react";
import SelectionType from "../../constants/Selection";
import APIBase from "../../base/APIBase";
import { useDispatch, useSelector } from "react-redux";
import API from "../../apis/APIConstant";
import { setPlatformSelected } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import StorageValue from "../../Storage/StorageValue";

export const menuSelectionLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();
  const platformSelected = useSelector((state) => state.platformSelected);

  const [count, setCount] = useState(0);
  const [dataSelection, setDataSelection] = useState([]);

  useEffect(() => {
    const getDataSelection = async () => {
      let uriApi = `${API.baseURL}${API.achiveList}`;
      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        let sideData = result.data;
        sideData = sideData.sort(
          (selectA, selectB) => selectA.sort - selectB.sort
        );
        setDataSelection(sideData);
      }
    };
    getDataSelection();
  }, [StorageValue.isUpdateMenu]);

  const handleSelectPlatform = (platform) => {
    _dispatch(setPlatformSelected(platform));
    // _navigate(`/${platform?.type?.toLowerCase()}`);
  };

  const handleNavigateAddTicket = (type) => {
    _navigate(`/add_ticket`, {
      state: {
        typePlatform: type,
      },
    });
  };

  return {
    count,
    dataSelection,
    handleSelectPlatform,
    handleNavigateAddTicket,
  };
};
