import Header from "@/app/components/Header";
import React, { ReactElement } from "react";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";

export default function SignUp(): ReactElement {
  const notifyRegisterSuccess = () => {
    toast.dark(`Your account has been created. Happy travels!`, {
      icon: "💌",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const subjectInput = form.querySelector("#password") as HTMLInputElement;
    const messageInput = form.querySelector(
      "#confirm-password"
    ) as HTMLTextAreaElement;

    if (emailInput.value && subjectInput.value && messageInput.value) {
      notifyRegisterSuccess();
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Head>
        <title>Mamma Mia Tours</title>
        <link rel="icon" href="../app/icon.png" sizes="32x32" />
      </Head>
      <Header />
      <div className="flex justify-center items-center pt-2">
        <div className="flex flex-col px-6 py-8 mx-auto md:h-screen lg:py-0 max-w-md tablet:max-w-xl laptop:max-w-2xl">
          {/*  */}
          <section
            className="text-14 laptop:text-16 leading-normal tablet:leading-normal laptop:leading-relaxed text-gray-500 py-4 text-center"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            This project is purely a frontend application, backend integration
            will happen in the future. Thus, this sign up page wont save
            anything in a database. {`It's`} just for simulation purposes.
          </section>
          <div className="w-full bg-secondaryPurple rounded-lg shadow tablet:mt-0 xl:p-0">
            <div className="p-6 space-y-4 tablet:space-y-6 tablet:p-8">
              <h1
                className="text-24 font-bold leading-tight tracking-tight laptop:text-26 text-primaryPurple py-1"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Create Account
              </h1>
              <form
                className="space-y-4 tablet:space-y-6"
                onSubmit={handleSubmit}
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-14 tablet:text-16 text-gray-500"
                    style={{ fontWeight: "thin" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-14 tablet:text-16 rounded-lg focus:border-primaryPurple block w-full p-2.5 focus:ring-primaryPurple"
                    placeholder="mammamiatours@email.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-14 tablet:text-16 text-gray-500"
                    style={{ fontWeight: "thin" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-14 tablet:text-16 rounded-lg focus:border-primaryPurple block w-full p-2.5 focus:ring-primaryPurple"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-14 tablet:text-16 text-gray-500"
                    style={{ fontWeight: "thin" }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-14 tablet:text-16 rounded-lg focus:border-primaryPurple block w-full p-2.5 focus:ring-primaryPurple"
                    required
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-primaryPurple"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primaryPurple hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white w-full h-10 bg-black hover:bg-pastelBlue active:bg-primaryPurple rounded-lg text-14 tablet:text-16"
                >
                  Register
                </button>
                <ToastContainer />
                <p className="text-14 font-light text-primaryPurple">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
