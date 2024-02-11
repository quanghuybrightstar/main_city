import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

const InputBase = ({ typeInput, placeholder, onChange, width, height }) => {
  return (
    <div
      style={{
        marginTop: 45 * baseWidth,
      }}
    >
      <input
        type={typeInput || "text"}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          width: width || baseWidth * 500,
          height: height || baseWidth * 60,
          backgroundColor: "white",
          border: "1px solid rgba(0, 0, 0, 0.4)",
          borderRadius: 10 * baseWidth,
          outline: "none",
          paddingLeft: 20 * baseWidth,
          color: "#000",
          fontSize: smFontSize * 20,
        }}
      />
    </div>
  );
};

export default InputBase;
