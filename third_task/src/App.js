import React from "react";
import ClientForm from "./client_form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      {/* Declation for the toaster to use it anywhere in system */}
      <ToastContainer autoClose={7000} />
      <ClientForm />
    </React.Fragment>
  );
}

export default App;
