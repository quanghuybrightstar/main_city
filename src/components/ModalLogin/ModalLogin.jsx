import { modalLoginLogic } from "./ModalLogin.logic";
import ImageBase from "../Image/ImageBase";
import SmartBaseScreen from "../../base/SmartScreenBase";
import ColorBase from "../../styles/Color";
import {
  ModalLoginContainer,
  LoginContent,
  TextError,
} from "./ModalLogin.style";
import SrcImage from "../../constants/SrcImage";
import InputBase from "../InputBase/InputBase";
import PseudoClick from "../PseudoClick/PseudoClick";
import ButtonBase from "../Button/Button";
import { BaseTextSize28, ErrorText } from "../../styles/GlobalStyle.style";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

const ModalLogin = ({ isVisible, onClickClose }) => {
  let { errorMsg, onChangeEmail, onChangePassword, handleLogin } =
    modalLoginLogic();
  return (
    <ModalLoginContainer display={isVisible ? "flex" : "none"}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <PseudoClick onClick={onClickClose}>
          <ImageBase
            src={`${SrcImage.BaseURL}/ico_close.png`}
            alt="Close Icon"
            widthProps={82}
            heightProps={82}
          />
        </PseudoClick>
      </div>

      <LoginContent>
        {errorMsg && <TextError>{errorMsg}</TextError>}
        <div>
          <InputBase
            placeholder={"Nhập email..."}
            onChange={(e) => onChangeEmail(e.target.value)}
          ></InputBase>
          <InputBase
            typeInput={"password"}
            placeholder={"Nhập mật khẩu..."}
            onChange={(e) => onChangePassword(e.target.value)}
          ></InputBase>
        </div>
        <div
          style={{
            fontStyle: "italic",
            color: ColorBase.bluePrimary,
            fontSize: 25 * smFontSize,
            textDecoration: "underline",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            paddingRight: 150 * baseWidth,
            cursor: "pointer",
            marginTop: 35 * baseWidth,
          }}
        >
          Lấy mật khẩu
        </div>
        <ButtonBase
          widthProps={300}
          onClick={() => handleLogin()}
          heightProps={65}
          borderRadiusProps={40 * baseWidth}
          marginProps={`${120 * baseWidth}px 0 0 0`}
        >
          <BaseTextSize28>ĐĂNG NHẬP</BaseTextSize28>
        </ButtonBase>
        c
      </LoginContent>
    </ModalLoginContainer>
  );
};

export default ModalLogin;
