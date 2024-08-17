import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});

const Login = ({ setIsAuthenticated }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setUser(JSON.parse(storedData));
    }
  }, []);

  const getData = async () => {
    setLoading(true);
    setError(null);

    try {
      if (user && userData && userData.email === user.email && userData.password === user.password) {
        navigate("/main");
        const status= true;
        setIsAuthenticated(true);
        localStorage.setItem('status',status)
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", 
  });

  const onSubmit = (data) => setUserData(data);

  return (
    <>
      <div className="py-2">
        <span className="text-2xl font-bold">Login form</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 border-2 w-[400px] bg-slate-300 border-black rounded-lg py-6 px-6">
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="email"
              {...register("email")}
              className="px-2 w-full"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              {...register("password")}
              className="px-2 w-full"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <button
            type="submit"
            className="bg-black py-1 px-2 text-white disabled:opacity-50"
            disabled={!isValid}
            onClick={getData}
          >
            Login
          </button>
        </div>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        Create an account!{" "}
        <span className="font-bold">
          <Link to="/Signup">Signup</Link>
        </span>{" "}
      </div>
    </>
  );
};

export default Login;
