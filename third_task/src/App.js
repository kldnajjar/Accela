import React from "react";
import ClientForm from "./client_form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <ToastContainer autoClose={7000} />
      <ClientForm />
    </React.Fragment>
  );
}

export default App;
