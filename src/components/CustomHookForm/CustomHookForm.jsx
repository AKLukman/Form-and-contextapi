import useInputSate from "../../hooks/useInputState";

const CustomHookForm = () => {
  //   const [name, hahandleChange] = useInputSate("ABC");
  const emailInput = useInputSate("abc@gmail.com");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    console.log(emailInput.value);
  };

  return (
    <div>
      <h2>Custom Hook Form</h2>
      <form onSubmit={handleFormSubmit}>
        {/* <input value={name} onChange={hahandleChange} type="text" name="name" /> */}
        <br />
        <input {...emailInput} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default CustomHookForm;
