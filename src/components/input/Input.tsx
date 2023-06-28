import Styled from "./Input.styled";
import { useState } from "react";
import EyeOpenLogo from "assets/password__logo.svg";
import EyeCloseLogo from "assets/password__logo-show.svg";
import { Controller, Control } from "react-hook-form";
import { FormValues } from "pages/login/Login";

interface InputProps {
  label?: string;
  error?: string;
  placeholder?: string;
  type: "text" | "password";
  name: keyof FormValues;
  control: Control<FormValues, any>;
}

const Input = (props: InputProps) => {
  const { label, error, placeholder, type, name, control } = props;
  const [showPassword, setShowPassword] = useState(true);
  const showCondition = showPassword ? EyeOpenLogo : EyeCloseLogo;

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field }) => (
        <Styled.InputWrapper>
          <Styled.Label>
            {label}
            {type === "password" ? (
              <>
                <Styled.Input
                  {...field}
                  type={showPassword ? "text" : "password"}
                  placeholder={placeholder}
                />
                <Styled.Button onClick={handleShowPassword}>
                  <Styled.Img src={showCondition} alt="" />
                </Styled.Button>
              </>
            ) : (
              <Styled.Input type="text" {...field} placeholder={placeholder} />
            )}
          </Styled.Label>
          {error && <Styled.Error>{String(error)}</Styled.Error>}
        </Styled.InputWrapper>
      )}
      name={name}
    />
  );
};

export default Input;
