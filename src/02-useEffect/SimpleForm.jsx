import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [fromState, setfromState] = useState({
    username: "Jefferson",
    email: "jaguilars5@unemi.edu.ec",
  });
  const { username, email } = fromState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setfromState({
      ...fromState,
      [name]: value,
    });
  };
  useEffect(() => {
    // console.log("useEffect");
  }, []);
  useEffect(() => {
    // console.log("fromState cambio");
  }, [fromState]);
  useEffect(() => {
    // console.log("username cambio");
  }, [username]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <input
        type="text"
        className="from-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="from-control mt-2"
        placeholder="user@unemi.edu.ec"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "Christina" && <Message />}
    </>
  );
};
