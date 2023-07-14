import { useMutation, useQuery } from "react-query";
import { checkUser, login, signIn } from "../../api/User";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const { data } = useQuery("users", checkUser, {
    onError: () => {
      // alert("토큰이 만료되었습니다! 다시 로그인 해주세요!");
    },
  });

  const userSignIn = useMutation(signIn, {
    onSuccess: () => {
      alert("회원가입이 완료 되었습니다!");
      navigate("/");
    },
    onError: () => {
      alert("회원가입에 실패하였습니다!");
    },
  });

  const userLogin = useMutation(login, {
    onSuccess: () => {
      alert("로그인 되었습니다!");
      navigate("/");
    },
    onError: () => {
      alert("로그인에 실패하였습니다!");
    },
  });

  return { userSignIn, userLogin, data };
};

export default useLogin;
