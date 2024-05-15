"use client"
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import googleLogo from "../../../public/google.svg";
import logo from "../../../public/Slogo.png";
import InputField from './../../components/input/InputField';
import Link from "next/link";
import Image from "next/image";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        console.log("Submitted", values)
      } catch (error) {
        if (error.message === "Server timeout.") {
        } else {
          console.error(error);
        }
      }
    },
  });

  const handleChange = (event) => {
    formik.handleChange(event);
    formik.setFieldTouched(event.target.name, true, false);
  };

  return (
    <div className="h-screen">
      <div className="h-auto flex flex-col lg:flex-row justify-center px-4 sm:px-0">
        <div className="bg-slate-200 lg:w-[40%] rounded-tl-xl rounded-bl-xl ">
          <div className="px-4 lg:px-20 py-7 items-center">
            <p className="text-3xl font-medium">Login</p>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-2">
                <p className="text-md font-normal">Email</p>
                <div className="mt-2">
                  <InputField
                    name="email"
                    value={formik.values.email}
                    onChange={handleChange}
                    type="text"
                    autoComplete="email"
                    placeholder="example@vootel.com"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="mt-7">
                <p className="text-md font-normal">Password</p>
                <div className="mt-2">
                  <InputField
                    name="password"
                    value={formik.values.password}
                    onChange={handleChange}
                    type="password"
                    autoComplete="current-password"
                    placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500 text-sm">{formik.errors.password}</div>
                  ) : null}
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <a className="text-color-darker text-xs font-bold hover:cursor-pointer">
                  Forgot password?
                </a>
              </div>
              <div className="mt-5">
                <button className="btn btn-primary w-full rounded-full" type="submit">Submit</button>
              </div>
            </form>
            <div className="mt-5 flex flex-row gap-3 items-center">
              <div className="w-1/2 border border-grey h-0" />
              <p className="text-sm font-normal text-slate-500">OR</p>
              <div className="w-1/2 border border-grey h-0" />
            </div>
            <div className="mt-2 flex items-center justify-center">
              <button
                className={`hover:bg-blue-500 text-black font-semibold py-2 px-2 rounded-full border border-slate-300`}
              >
                <Image src={googleLogo} width={40} height={40} alt="logo" />
              </button>
            </div>
            <div>
              <div className="mt-3 flex justify-center items-center">
                <p className="text-sm font-normal">Don't have an account?</p>
                <div
                  className="text-color-darker text-sm font-bold hover:cursor-pointer ml-1"

                >
                  <Link href="/signup">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-500 lg:w-[20%] flex justify-center items-center rounded-tr-xl rounded-br-xl hidden lg:flex ">
          <Image src={logo} width={250} height={250} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Login;
