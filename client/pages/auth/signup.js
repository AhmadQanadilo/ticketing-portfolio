import { useState } from "react";
import useRequest from "../../hooks/useRequest";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>email</label>
      <input value={email} type="email" />
      <label>password</label>
      <input value={password} type="password" />
      <button className="primary" type="submit">
        {" "}
        Sign In
      </button>
    </form>
  );
};

export default Signup;
