import { useState } from "react";
import TypeTime from "../../constants/TypeTime";

export const squareScreenLogic = (props) => {
  // Variable state type time
  const [typeTime, setTypeTime] = useState(TypeTime.ALL_TIME);

  const [dataRankList, setDataRankList] = useState([
    {
      rank_id: 4,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 4500,
    },
    {
      rank_id: 5,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 4444,
    },
    {
      rank_id: 6,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 4242,
    },
    {
      rank_id: 7,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 4000,
    },
    {
      rank_id: 8,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 3900,
    },
    {
      rank_id: 9,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 3800,
    },
    {
      rank_id: 10,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 3700,
    },
    {
      rank_id: 32,
      imgUrl: "/avtRankLower.png",
      name: "@playername",
      number_diamond: 2243,
      is_my_rank: 1,
    },
  ]);

  // Func handle change type time
  const handleChangeTypeTime = (typeSelected) => {
    setTypeTime(typeSelected);
  };

  return {
    typeTime,
    dataRankList,
    handleChangeTypeTime,
  };
};
