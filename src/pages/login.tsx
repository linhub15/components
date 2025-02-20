import { Button } from "../components/button/button";
type Options = "hi" | "bye";

type Props = {
  thing: Options;
};

export function Login(props: Props) {
  return (
    <>
      {props.thing}
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <Button>Login</Button>
    </>
  );
}
