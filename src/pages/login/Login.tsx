import Styled from "./Login.styled";
import logo from "assets/logo.svg";
import Input from "components/input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

export interface FormValues {
  login: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(schema(t)),
  });

  const onSubmit = (data: FormValues) => {
    if (data.login && data.password === "admin") {
      localStorage.setItem("token", "true");
      navigate("/");
    } else {
      toast.error(t("loginError"));
    }
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Styled.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <Styled.Login>
          <Styled.Img src={logo} alt="App logo" width={100} />
          <Styled.Title>{t("login")}</Styled.Title>
          <Input
            name="login"
            control={control}
            type="text"
            label={t("username")}
            error={errors.login?.message}
          />
          <Input
            name="password"
            control={control}
            type="password"
            label={t("password")}
            error={errors.password?.message}
          />
          <Styled.Button type="submit">{t("log_in")}</Styled.Button>
        </Styled.Login>
      </Styled.Wrapper>
    </>
  );
};

export default Login;

const schema = (t: (key: string) => string) =>
  yup.object({
    login: yup.string().required(t("requiredField")).min(4, t("loginField")),
    password: yup
      .string()
      .required(t("requiredField"))
      .min(5, t("passwordField")),
  });
