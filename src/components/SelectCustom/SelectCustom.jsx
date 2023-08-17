import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const SelectCustom = (props) => {
  let { isVisible, dataSelect, handleClickType } = props;

  const renderDataSelect = (data) => (
    <div
      key={data?.id}
      style={{
        color: "#000",
        fontSize: smFontSize * 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderBottom: "1px solid #999",
        padding: ` ${baseWidth * 15}px 0`,
        width: "80%",
        cursor: "pointer",
      }}
      onClick={(e) => handleClickType(data?.type)}
    >
      {data.type}
    </div>
  );

  return (
    <div
      style={{
        display: isVisible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#fff",
        position: "absolute",
        top: 40 * baseWidth,
        left: -25 * baseWidth,
        width: 300 * baseWidth,
        maxHeight: 250 * baseWidth,
        overflow: "hidden",
        borderRadius: baseWidth * 20,
        // padding: `${baseWidth * 20}px 0`,
        zIndex: 99,
      }}
    >
      {dataSelect.map((data) => renderDataSelect(data))}
    </div>
  );
};

export default SelectCustom;
