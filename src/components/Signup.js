import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "First Name must only contain letters")
    .max(10, "First Name must be at most 10 characters")
    .required("First Name is required"),
  lastName: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, "Last Name must only contain letters")
    .max(20, "Last Name must be at most 20 characters")
    .required("Last Name is required"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // This will trigger validation when the input field loses focus
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="py-2">
        <span className="text-2xl font-bold">Signup Form</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 border-2 border-black bg-slate-300 w-[400px] rounded-lg py-6 px-6">
          <label htmlFor="firstName">First Name:</label>
          <div>
            <input
              type="text"
              className="px-2 w-full"
              {...register("firstName")}
            />
            <p className="text-red-500 text-xs">{errors.firstName?.message}</p>
          </div>
          <label htmlFor="lastName">Last Name:</label>
          <div>
            <input
              type="text"
              className="px-2 w-full"
              {...register("lastName")}
            />
            <p className="text-red-500 text-xs">{errors.lastName?.message}</p>
          </div>
          <label htmlFor="email">Email:</label>
          <div>
            <input
              type="email"
              className="px-2 w-full"
              {...register("email")}
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>
          </div>
          <label htmlFor="password">Password:</label>
          <div>
            <input
              type="password"
              className="px-2 w-full"
              {...register("password")}
            />
            <p className="text-red-500 text-xs">{errors.password?.message}</p>
          </div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <div>
            <input
              type="password"
              className="px-2 w-full"
              {...register("confirmPassword")}
            />
            <p className="text-red-500 text-xs">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-black text-white disabled:opacity-50"
            disabled={!isValid}
          >
            Signup
          </button>
        </div>
      </form>

      <div>
        Already have an account!{" "}
        <span className="font-bold">
          <Link to="/">Login</Link>
        </span>
      </div>
    </>
  );
};

export default Signup;
