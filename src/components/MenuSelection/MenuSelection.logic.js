import { useState, useEffect } from "react";
import SelectionType from "../../constants/Selection";
import APIBase from "../../base/APIBase";
import API from "../../apis/APIConstant";

export const menuSelectionLogic = (props) => {
  const [count, setCount] = useState(0);
  // const [dataSelection, setDataSelection] = useState([
  //   {
  //     id: 1,
  //     imgUrl: "/items/diamond.png",
  //     type: SelectionType.DIAMOND,
  //     count: "29",
  //     title: "Kim cương tích lũy",
  //   },
  //   {
  //     id: 2,
  //     imgUrl: "/items/building.png",
  //     imgUrlSelected: "/items/building_selected.png",
  //     type: SelectionType.BUILDING,
  //     gift_count: "3",
  //     title: "Cao ốc vui vẻ",
  //   },
  //   {
  //     id: 3,
  //     imgUrl: "/items/square.png",
  //     imgUrlSelected: "/items/square_selected.png",
  //     type: SelectionType.SQUARE,
  //     rank: "32",
  //     number_increase: "28",
  //     title: "Quảng trường danh vọng",
  //     selected: 1,
  //   },
  //   {
  //     id: 4,
  //     imgUrl: "/items/factory.png",
  //     imgUrlSelected: "/items/factory_selected.png",
  //     type: SelectionType.FACTORY,
  //     new_puzzle: "2",
  //     title: "Nhà máy hạnh phúc",
  //   },
  //   {
  //     id: 5,
  //     imgUrl: "/items/wheel.png",
  //     imgUrlSelected: "/items/wheel_selected.png",
  //     type: SelectionType.WHEEL,
  //     ticket_remaining: "3",
  //     title: "Công viên ước mơ",
  //   },
  //   {
  //     id: 6,
  //     imgUrl: "/items/racer.png",
  //     type: SelectionType.RACER,
  //     ticket_remaining: "5",
  //     title: "Đấu trường siêu tốc",
  //   },

  //   {
  //     id: 7,
  //     imgUrl: "/items/monopoly.png",
  //     ticket_remaining: "3",
  //     type: SelectionType.MONOPOLY,
  //     title: "Hành trình triệu đô",
  //   },
  // ]);

  const [dataSelection, setDataSelection] = useState([]);

  console.log(APIBase.access_token);

  useEffect(() => {
    const getDataSelection = async () => {
      let uriApi = `${API.baseURL}${API.achiveList}`;
      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        setDataSelection(result.data);
      }
    };
    getDataSelection();
  }, []);

  return {
    count,
    dataSelection,
  };
};
