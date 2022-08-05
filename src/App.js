import { useContext } from "react";
import { AppContext } from "./context/Provider";

import styled from "styled-components";

import { Form } from "./components/Form";
import { NameForm } from "./components/NameForm";
import { BirthForm } from "./components/BirthForm";
import { ContactForm } from "./components/ContactForm";
import { ConfirmData } from "./components/ConfirmData";

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { formSection } = useContext(AppContext);
  return (
    <AppDiv>
      <Form>
        <NameForm />
        {formSection.birthSection && <BirthForm />}
        {formSection.contactSection && <ContactForm />}
        {formSection.lastSection && <ConfirmData />}
      </Form>
    </AppDiv>
  );
}

export default App;
