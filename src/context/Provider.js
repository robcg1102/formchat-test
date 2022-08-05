import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [dataUser, setDataUser] = useState({
    name: "",
    secondName: "",
    fatherLastName: "",
    motherLastName: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    email: "",
    phone: "",
  });
  const [formSection, setFormSection] = useState({
    birthSection: false,
    contactSection: false,
    lastSection: false,
  });

  const [sessionCreated, setSessionCreated] = useState(false);

  const changeSection = (changeSection) => {
    setFormSection({ ...formSection, [changeSection]: true });
  };

  const handleInput = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.id]: e.target.value,
    });
  };

  const setSession = () => {
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

    const nameUser = `${name} ${secondName} ${fatherLastName} ${motherLastName}`.trim();
    const birthUser = `${birthDay} ${birthMonth} ${birthYear}`.trim();

    const sessionData = [
      { name: nameUser },
      { birth: birthUser },
      { email },
      { phone },
    ];
    sessionStorage.setItem("dataUser", JSON.stringify(sessionData));
    setSessionCreated(true);
  };

  return (
    <AppContext.Provider
      value={{
        formSection,
        changeSection,
        dataUser,
        setDataUser,
        handleInput,
        setSession,
        sessionCreated
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = createContext();
