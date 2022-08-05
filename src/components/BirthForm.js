import styled from "styled-components";
import { WomanImg } from "./WomanImg";

import { useContext } from "react";
import { AppContext } from "../context/Provider";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const FormDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  div {
    padding-top: 10px;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #eceeee;
    padding-left: 30px;
    border-radius: 7px;

    input {
      width: 90%;
      margin: 15px 0;
      padding: 10px 5px;
      background: transparent;
      border-radius: 3px;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

const AswerUser = styled.div`
  margin: 15px 0;
  background-color: #e45ed8;
  padding: 10px 20px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid purple;

  .icon {
    padding-top: 15px;
    cursor: pointer;
    color: green;
    transform: scale(1.5);

    &:hover {
      transform: scale(1.3);
    }
  }
`;
export const BirthForm = () => {
  const { changeSection, dataUser, handleInput, formSection } =
    useContext(AppContext);

  const { birthDay, birthMonth, birthYear } = dataUser;

  return (
    <>
      <FormDiv>
        <WomanImg />
        <div>
          <h3>¿Cuál es tu fecha de nacimiento?</h3>
          <input
            type="text"
            placeholder="Día"
            autoFocus
            value={birthDay}
            onChange={(e) => handleInput(e)}
            id="birthDay"
            disabled={formSection.contactSection}
          />
          <input
            type="text"
            placeholder="Mes"
            value={birthMonth}
            onChange={(e) => handleInput(e)}
            id="birthMonth"
            disabled={formSection.contactSection}
          />
          <input
            type="text"
            placeholder="Año"
            value={birthYear}
            onChange={(e) => handleInput(e)}
            id="birthYear"
            disabled={formSection.contactSection}
          />
        </div>
      </FormDiv>
      {birthDay && birthMonth && birthYear && (
        <AswerUser>
          <p>
            <b>Nacimiento:</b> {birthDay} {birthMonth} {birthYear}
          </p>
          {!formSection.contactSection && (
            <>
              <p>¿Es correcto?</p>
              <TaskAltIcon onClick={() => changeSection("contactSection")} className="icon" />
            </>
          )}
        </AswerUser>
      )}
    </>
  );
};
