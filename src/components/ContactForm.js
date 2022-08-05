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

export const ContactForm = () => {
  const { changeSection, dataUser, handleInput, formSection } =
    useContext(AppContext);

  const { email, phone } = dataUser;
  return (
    <>
      <FormDiv>
        <WomanImg />
        <div>
          <h3>Datos de contacto</h3>
          <input
            type="mail"
            placeholder="Correo electrónico"
            autoFocus
            value={email}
            onChange={(e) => handleInput(e)}
            id="email"
            disabled={formSection.lastSection}
          />
          <input
            type="text"
            placeholder="Teléfono celular"
            value={phone}
            onChange={(e) => handleInput(e)}
            id="phone"
            disabled={formSection.lastSection}
          />
        </div>
      </FormDiv>
      {email && phone && (
        <AswerUser>
          <p>
            <b>Correo electrónico:</b> {email}
          </p>
          <p>
            <b>Teléfono: </b>
            {phone}
          </p>
          {!formSection.lastSection && (
            <>
              <p>¿Es correcto?</p>
              <TaskAltIcon
                onClick={() => changeSection("lastSection")}
                className="icon"
              />
            </>
          )}
        </AswerUser>
      )}
    </>
  );
};
