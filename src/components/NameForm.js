import styled from "styled-components";
import { WomanImg } from "./WomanImg";

import { useContext } from "react";
import { AppContext } from "../context/Provider";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const FormDiv = styled.div`
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

export const NameForm = () => {
  const { changeSection, dataUser, handleInput, formSection } =
    useContext(AppContext);

  const { name, secondName, fatherLastName, motherLastName } = dataUser;

  return (
    <>
      <FormDiv>
        <WomanImg />
        <div>
          <h3>¿Cuál es tu nombre?</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => handleInput(e)}
            id="name"
            disabled={formSection.birthSection}
          />
          <input
            type="text"
            placeholder="Segundo nombre"
            value={secondName}
            onChange={(e) => handleInput(e)}
            id="secondName"
            disabled={formSection.birthSection}
          />
          <input
            type="text"
            placeholder="Apellido paterno"
            value={fatherLastName}
            onChange={(e) => handleInput(e)}
            id="fatherLastName"
            disabled={formSection.birthSection}
          />
          <input
            type="text"
            placeholder="Apellido materno"
            value={motherLastName}
            onChange={(e) => handleInput(e)}
            id="motherLastName"
            disabled={formSection.birthSection}
          />
        </div>
      </FormDiv>
      {name && fatherLastName && (
        <AswerUser>
          <p>
            <b>Nombre:</b> {name} {secondName} {fatherLastName} {motherLastName}
          </p>
          {!formSection.birthSection && (
            <>
              <p>¿Es correcto?</p>
              <TaskAltIcon onClick={() => changeSection("birthSection")} className="icon" />
            </>
          )}
        </AswerUser>
      )}
    </>
  );
};
