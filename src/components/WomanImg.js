import styled from "styled-components";
import woman from "../assets/woman.jpg";
import SpaIcon from "@mui/icons-material/Spa";

const SpanImg = styled.span`
  border: solid 3px #e45ed8;
  height: 82px;
  border-radius: 40px;
  margin-right: 5px;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    border-radius: 40px;
    padding: 1px;
    border: solid 1x gray;
  }

  .icon {
    position: absolute;
    transform: scale(0.6);
    padding: 10px;
    bottom: -10px;
    right: -7px;
    background-color: #e45ed8;
    border-radius: 50%;
  }
`;

export const WomanImg = () => {
  return (
    <SpanImg>
      <img src={woman} alt="woman" />
      <SpaIcon className="icon" />
    </SpanImg>
  );
};
