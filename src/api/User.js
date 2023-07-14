import axios from "axios";
import { getCookie, setCookie } from "../Cookie";

const signIn = async (newUser) => {
  await axios.post(`http://3.38.191.164/register`, newUser);
};

const login = async (currentUser) => {
  const response = await axios.post(`http://3.38.191.164/login`, currentUser);
  setCookie("token", response.data.token, {
    path: "/",
    secure: "/",
  });
};

const checkUser = async () => {
  const token = getCookie("token");
  const response = await axios.get(`http://3.38.191.164/user`, {
    headers: { authorization: `Bearer ${token}` },
  });
  return response.data;
};

export { signIn, login, checkUser };
