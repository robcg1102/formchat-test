import styled from "styled-components";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import AlarmIcon from "@mui/icons-material/Alarm";

const FormDiv = styled.div`
  height: 85vh;
  width: 50%;
  -webkit-box-shadow: 11px 14px 15px 5px #000000;
  box-shadow: 11px 14px 15px 5px #000000;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  .headForm {
    height: 150px;
    background: #e45ed8;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    .left {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .iconP {
        display: flex;
        align-items: center;

        .icon {
          padding-right: 10px;
        }
      }
    }
    .right {
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        transform: scale(3);
        color: white;
      }
    }
  }

  .contentForm {
    padding: 10px 50px;
    overflow: scroll;
    height: 100%;
    overflow-x: hidden;
  }
  @media only screen and (max-width: 880px) {
    width: 85%;

    .headForm {
      padding: 10px 20px;
    }
    .contentForm {
      padding: 10px 30px;
    }
  }
`;

export const Form = ({ children }) => {
  return (
    <FormDiv>
      <div className="headForm">
        <div className="left">
          <h2>Título de formulario</h2>
          <p className="iconP">
            <AlarmIcon className="icon" />
            En menos de 5 minutos.
          </p>
        </div>
        <div className="right">
          <ContentPasteIcon className="icon" />
        </div>
      </div>
      <div className="contentForm">{children}</div>
    </FormDiv>
  );
};
