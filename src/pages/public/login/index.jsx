import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import request from "../../../server";
import { TOKEN, USER } from "../../../constants";
import { setAuth } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const userData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const {
      data: { token, user },
    } = await request.post("auth/login", userData);

    Cookies.set(TOKEN, token);
    localStorage.setItem(USER, JSON.stringify(user));
    navigate("/dashboard");

    dispatch(setAuth(user));
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={login}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
