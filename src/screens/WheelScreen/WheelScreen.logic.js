import { useState, useEffect } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import { getPlatformDetail } from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";
import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();

const baseWidth = SmartBaseScreen.smBaseWidth;

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

  const [value, setValue] = useState(1800);

  const [isSpin, setIsSpin] = useState(true);

  const [items, setItems] = useState([
    {
      id: 1,
      name: "1",
      keyImg: "item_1",
      baseRotate: 150,
    },
    {
      id: 2,
      name: "2",
      keyImg: "item_2",
      baseRotate: 120,
    },
    {
      id: 3,
      name: "3",
      keyImg: "item_3",
      baseRotate: 90,
    },
    {
      id: 4,
      name: "4",
      keyImg: "item_4",
      baseRotate: 60,
    },
    {
      id: 5,
      name: "5",
      keyImg: "item_5",
      baseRotate: 30,
    },
    {
      id: 6,
      name: "6",
      keyImg: "item_6",
      baseRotate: 0,
    },
    {
      id: 7,
      name: "7",
      keyImg: "item_7",
      baseRotate: 330,
    },
    {
      id: 8,
      name: "8",
      keyImg: "item_8",
      baseRotate: 300,
    },
    {
      id: 9,
      name: "9",
      keyImg: "item_9",
      baseRotate: 270,
    },
    {
      id: 10,
      name: "10",
      keyImg: "item_10",
      baseRotate: 240,
    },
    {
      id: 11,
      name: "11",
      keyImg: "item_11",
      baseRotate: 210,
    },
    {
      id: 12,
      name: "12",
      keyImg: "item_12",
      baseRotate: 180,
    },
  ]);
  // const circleCenterX = 825 * baseWidth; // X-coordinate of the circle's center
  // const circleCenterY = 292 * baseWidth; // Y-coordinate of the circle's center
  // const circleRadius = 267 * baseWidth; // Radius of the circle

  // // Calculate and store the positions of midpoints
  // const numSectors = 12;

  // // Calculate the angle between each sector
  // const sectorAngle = (2 * Math.PI) / numSectors;

  // // Array to store the midpoints
  // const midpoints = [];

  // // Calculate the midpoints of each sector
  // for (let i = 0; i < numSectors; i++) {
  //   const sectorMidpointAngle = i * sectorAngle + sectorAngle / 2; // Angle for the midpoint of each sector

  //   // Calculate the midpoint coordinates
  //   const midpointX =
  //     circleCenterX + circleRadius * Math.cos(sectorMidpointAngle);
  //   const midpointY =
  //     circleCenterY + circleRadius * Math.sin(sectorMidpointAngle);

  //   // Store the midpoint in the array
  //   midpoints.push({ x: midpointX, y: midpointY });
  // }

  // Display the calculated midpoints

  const handleSpinWheel = () => {
    // setDataWheel({
    //   tickets_remaining: dataWheel.tickets_remaining - 1,
    // });

    if (isSpin) {
      console.log(items);

      let wheelContainer = document.querySelector(".wheelContainer");

      const idItemRandom = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

      let valueRotate = value;
      let itemRotated = 0;

      items.forEach((item) => {
        if (item.id === idItemRandom) {
          valueRotate = valueRotate + item.baseRotate;
          itemRotated = item;
        }
      });

      setValue(1800 + valueRotate);

      const newItems = items;

      newItems.map((item) => {
        if (item.baseRotate >= itemRotated.baseRotate) {
          item.baseRotate -= itemRotated.baseRotate;
        } else {
          item.baseRotate += 360 - itemRotated.baseRotate;
        }
      });

      setItems(newItems);

      wheelContainer.style.transform = `rotate(${valueRotate}deg)`;
      setIsSpin(false);

      setTimeout(() => {
        setIsSpin(true);
        alert(`Chúc mừng bạn đã quay được mảnh ghép ${itemRotated.name}`);
      }, 5000);
    }
  };

  return { dataWheel, platformSelected, items, handleSpinWheel };
};
