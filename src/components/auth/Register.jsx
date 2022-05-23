import React from "react";
import { useForm } from "react-hook-form";
import content from "../constants/Constant";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
  confirm_password: yup.string().required().min(5),
  username: yup.string().required(),
  phone: yup.number().required(),
});

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const navigator = useNavigate();
  function handleClick() {
    navigator("/chart");
  }

  return (
    <div className="register">
      <h2 className="register__hdr">Create an account</h2>
      {/* action="/" method="get"  */}
      <form onSubmit={handleSubmit(onSubmit)} className="register__form">
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label>{input.label}</label>
              </p>
              <p>
                <input
                  name={input.name}
                  type={input.type}
                  {...register(input.name)}
                  className="register__form__input"
                />
              </p>
              <p className="register__form__errors">
                {errors[input.name]?.message}
              </p>
            </div>
          );
        })}
        <label className="box">
          <input type="checkbox" className="box__btn" />I read and agree Terms
          and Conditions
        </label>
        <br />
        <button type="submit" onClick={handleClick}>
          Create account
        </button>
      </form>
    </div>
  );
}
