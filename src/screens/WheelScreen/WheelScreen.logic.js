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

  const [value, setValue] = useState(
    Math.ceil(Math.random() * (3600 - 2400) + 2400)
  );

  const [item, setItem] = useState([
    {
      id: 1,
      name: "1",
    },
    {
      id: 2,
      name: "2",
    },
    {
      id: 3,
      name: "3",
    },
    {
      id: 4,
      name: "4",
    },
    {
      id: 5,
      name: "5",
    },
    {
      id: 6,
      name: "6",
    },
    {
      id: 7,
      name: "7",
    },
    {
      id: 8,
      name: "8",
    },
    {
      id: 9,
      name: "9",
    },
    {
      id: 10,
      name: "10",
    },
    {
      id: 11,
      name: "11",
    },
    {
      id: 12,
      name: "12",
    },
  ]);
  const circleCenterX = 825 * baseWidth; // X-coordinate of the circle's center
  const circleCenterY = 292 * baseWidth; // Y-coordinate of the circle's center
  const circleRadius = 267 * baseWidth; // Radius of the circle

  // Calculate and store the positions of midpoints
  const numSectors = 12;

  // Calculate the angle between each sector
  const sectorAngle = (2 * Math.PI) / numSectors;

  // Array to store the midpoints
  const midpoints = [];

  // Calculate the midpoints of each sector
  for (let i = 0; i < numSectors; i++) {
    const sectorMidpointAngle = i * sectorAngle + sectorAngle / 2; // Angle for the midpoint of each sector

    // Calculate the midpoint coordinates
    const midpointX =
      circleCenterX + circleRadius * Math.cos(sectorMidpointAngle);
    const midpointY =
      circleCenterY + circleRadius * Math.sin(sectorMidpointAngle);

    // Store the midpoint in the array
    midpoints.push({ x: midpointX, y: midpointY });
  }

  // Display the calculated midpoints
  console.log(midpoints);

  const handleSpinWheel = () => {
    // setDataWheel({
    //   tickets_remaining: dataWheel.tickets_remaining - 1,
    // });
    let wheelContainer = document.querySelector(".wheelContainer");

    console.log(value);
    wheelContainer.style.transform = `rotate(${value}deg)`;
    let elementId = document.getElementById("wheel");
    const elementBound = elementId.getBoundingClientRect();

    console.log(elementBound.x, elementBound.y);
    // Display the calculated midpoints
    console.log(midpoints);
    function getPositionEle() {
      const computedStyle = window.getComputedStyle(wheelContainer);
      const transform = computedStyle.getPropertyValue("transform");
      const values = transform.split("(")[1].split(")")[0].split(",");
      const a = values[0];
      const b = values[1];
      const rotation = Math.atan2(b, a);

      const finalX =
        midpoints[5].x * Math.cos(rotation) -
        midpoints[5].y * Math.sin(rotation);
      const finalY =
        midpoints[5].x * Math.sin(rotation) +
        midpoints[5].y * Math.cos(rotation);

      console.log(finalX + "_" + finalY);

      // const midpoints2 = [];
      // for (let i = 0; i < 12; i++) {
      //   const angleDegrees = i * 30 + 15; // Calculate the angle for each sector's midpoint (15 degrees offset for the midpoint)
      //   const angleRadians = (angleDegrees * Math.PI) / 180; // Convert angle to radians
      //   const midpointX = circleCenterX + circleRadius * Math.cos(angleRadians);
      //   const midpointY = circleCenterY + circleRadius * Math.sin(angleRadians);

      //   midpoints2.push({ x: midpointX, y: midpointY });
      // }

      // console.log(midpoints2);

      setValue(value + Math.ceil(Math.random() * (3600 - 2400) + 2400));
      // let elementId = document.getElementById("123");
      // const elementBound = elementId.getBoundingClientRect();

      // let element = document.getElementById("456");
      // const elementBound2 = element.getBoundingClientRect();

      // console.log(
      //   elementBound2.left -
      //     elementBound.left +
      //     "_" +
      //     (elementBound2.top - elementBound.top)
      // );

      // console.log(100 * baseWidth);

      // if (
      //   Math.abs(elementBound2.top - elementBound.top) <= 17 * baseWidth &&
      //   Math.abs(elementBound2.left - elementBound.left) <= 90 * baseWidth
      // ) {
      //   console.log("123");
      // }

      midpoints.forEach((point) => {
        if (
          point.y <= 361 * baseWidth &&
          point.y >= 222 * baseWidth &&
          point.x < 825 * baseWidth
        ) {
          console.log(point);
          console.log(825 * baseWidth);
        }
      });
    }

    wheelContainer.addEventListener("transitionend", getPositionEle);
  };

  return { dataWheel, platformSelected, item, handleSpinWheel };
};
