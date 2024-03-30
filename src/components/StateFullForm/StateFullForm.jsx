import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handldeFormSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 character or longer");
    } else {
      setError("");
      console.log(name);
    }
  };
  const handleNameField = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePasswordField = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h4>Statefull Form</h4>
      <form onSubmit={handldeFormSubmit}>
        <input
          value={name}
          onChange={handleNameField}
          type="text"
          name="name"
        />
        <br />
        <input type="email" name="email" />
        <br />
        <input onChange={handlePasswordField} type="password" name="password" />
        {error && <p>{error}</p>}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default StateFullForm;
