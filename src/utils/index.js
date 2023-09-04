/* eslint-disable no-unsafe-optional-chaining */
export const validateTimer = (timer) => {
  const [date, time] = timer?.split(" ");

  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
};

