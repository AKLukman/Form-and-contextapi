import { useEffect, useRef } from "react";

const RefFrom = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <h4>UseRef Form</h4>
      <form onSubmit={handleFormSubmit}>
        <input ref={nameRef} type="text" name="name" />
        <br />
        <input ref={emailRef} type="email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default RefFrom;
