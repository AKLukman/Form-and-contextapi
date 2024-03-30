import "./App.css";
import GrandPa from "./components/GrandPa/GrandPa";
import ReUseAbleForm from "./components/ReUseAableFrom/ReUseAbleForm";
// import CustomHookForm from "./components/CustomHookForm/CustomHookForm";
// import RefFrom from "./components/RefFrom/RefFrom";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  const handleSignUpForm = (data) => {
    console.log("Sign up form", data);
  };
  const handleUpdateForm = (data) => {
    console.log("Update form", data);
  };
  return (
    <>
      {/* <SimpleForm></SimpleForm>
       */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <CustomHookForm></CustomHookForm> */}
      <ReUseAbleForm formTitle={"Sign Up"} handleFormSubmit={handleSignUpForm}>
        <div>
          <h4>Sign Up Form</h4>
          <p>Please sing up and keep brwsing</p>
        </div>
      </ReUseAbleForm>
      <ReUseAbleForm
        formTitle={"Update form"}
        btnText={"update"}
        handleFormSubmit={handleUpdateForm}
      >
        <div>
          <h4>Update fomm</h4>
          <p>Please keep update</p>
        </div>
      </ReUseAbleForm>

      <GrandPa></GrandPa>
    </>
  );
}

export default App;
