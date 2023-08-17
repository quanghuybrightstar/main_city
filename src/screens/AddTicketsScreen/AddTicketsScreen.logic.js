import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const addTicketsLogic = (props) => {
  const navigate = useNavigate();

  const [dataMissions, setDataMissions] = useState([
    {
      id: 1,
      name: "Giới thiệu bạn bè tham gia",
      count_tickets: 5,
      title_game: "Đấu trường siêu tốc",
      is_completed: 1,
    },
    {
      id: 2,
      name: "Thanh toán hóa đơn tiền điện",
      count_tickets: 5,
      title_game: "Đấu trường siêu tốc",
      is_completed: 1,
    },
    {
      id: 3,
      name: "Giới thiệu bạn bè tham gia",
      count_tickets: 2,
      title_game: "Hành trình triệu đô",
      is_completed: 0,
    },
    {
      id: 4,
      name: "Chuyển tiền cho bạn bè",
      count_tickets: 2,
      title_game: "Đấu trường siêu tốc",
      is_completed: 0,
    },
    {
      id: 5,
      name: "Giới thiệu bạn bè tham gia",
      count_tickets: 1,
      title_game: "Công viên ước mơ",
      is_completed: 0,
    },
  ]);

  const [dataBuyTickets, setDataBuyTickets] = useState([
    {
      id: 1,
      imgURL: "/buyRacer.png",
      title: "5 Vé Đấu trường siêu tốc",
      tickets_remaining: 5,
      price: 700,
      is_sale: 1,
      number_sale: 30,
    },
    {
      id: 2,
      imgURL: "/buyRacer.png",
      title: "Vé Đấu trường siêu tốc",
      tickets_remaining: 5,
      price: 200,
      is_sale: 0,
    },
  ]);

  const [countBuyItem, setCountBuyItem] = useState(1);

  const handleChangeCountBuy = (type) => {
    if (type == "add") {
      setCountBuyItem(countBuyItem + 1);
    } else {
      if (countBuyItem > 1) {
        setCountBuyItem(countBuyItem - 1);
      }
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    dataMissions,
    dataBuyTickets,
    countBuyItem,
    handleChangeCountBuy,
    handleGoBack,
  };
};
