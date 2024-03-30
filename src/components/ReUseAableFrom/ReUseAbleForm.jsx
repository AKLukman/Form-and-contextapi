const ReUseAbleForm = ({
  formTitle,
  btnText = "submit",
  handleFormSubmit,
  children,
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    handleFormSubmit(data);
  };
  return (
    <div>
      {children}
      <h4>{formTitle}</h4>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="Password" name="password" />
        <br />
        <input type="submit" value={btnText} />
      </form>
    </div>
  );
};

export default ReUseAbleForm;
