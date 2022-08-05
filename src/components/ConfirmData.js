import styled from "styled-components";

import { useContext } from "react";
import { AppContext } from "../context/Provider";

import { WomanImg } from "./WomanImg";

const FormDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  div {
    padding-top: 10px;
    width: 75%;
    background-color: #eceeee;
    padding-left: 30px;
    border-radius: 7px;
  }
`;

const InitData = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 20px 0;
    width: 90%;
    padding: 10px 0;
    background-color: #f90ebb;
    color: white;
    border: none;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const AswerUser = styled.div`
  margin: 15px 0;
  background-color: #e45ed8;
  padding: 10px 20px;
  border-radius: 3px;
`;

export const ConfirmData = () => {
  const { dataUser, setSession, sessionCreated } = useContext(AppContext);

  const {
    name,
    secondName,
    fatherLastName,
    motherLastName,
    birthDay,
    birthMonth,
    birthYear,
    email,
    phone,
  } = dataUser;

  return (
    <>
      <FormDiv>
        <WomanImg />
        <div>
          <p>Si tus datos son correctos por favor continuemos.</p>
        </div>
      </FormDiv>

      <InitData>
        <button onClick={() => setSession()}>Iniciar</button>
      </InitData>
      {sessionCreated && (
        <AswerUser>
          <p>
            <b>Fecha de nacimiento:</b> {birthDay} {birthMonth} {birthYear}
          </p>
          <p>
            <b>Correo electrónico: </b> {email}
          </p>
          <p>
            <b>Teléfono: </b> {phone}
          </p>
          <p>
            <b>Nombre: </b> {name} {secondName} {fatherLastName}{" "}
            {motherLastName}
          </p>
        </AswerUser>
      )}
    </>
  );
};
