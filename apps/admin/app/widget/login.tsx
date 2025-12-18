import axios from "../utils/axios";
import { useForm } from "react-hook-form";
import { Form } from "react-router";
import { useNavigate } from "react-router";

type Inputs = {
  id: string;
  password: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit = async (v: Inputs): Promise<void> => {
    try {
      const res = await axios.post("/auth/login", {
        email: v.id,
        password: v.password,
      });
      navigate("/");
    } catch {
      alert("로그인 실패");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type={"text"} placeholder={"아이디"} {...register("id")} />
      <input
        type={"password"}
        placeholder={"비밀번호"}
        {...register("password")}
      />
      <button>로그인</button>
    </form>
  );
}
