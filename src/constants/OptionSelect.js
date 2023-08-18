class OptionSelect {
  static optionTimeFilter = [
    {
      id: 1,
      name: "Mới nhất",
      type: "new",
    },
    {
      id: 2,
      name: "Cũ nhất",
      type: "old",
    },
  ];

  static optionGiftFilter = [
    {
      id: 1,
      name: "Tất cả",
      type: "all",
    },
    {
      id: 2,
      name: "Voucher",
      type: "voucher",
    },

    {
      id: 3,
      name: "Kim Cương",
      type: "diamond",
    },
  ];
}

export default OptionSelect;
