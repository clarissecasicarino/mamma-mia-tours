import React, { ReactElement } from "react";
import { QuoteIcon } from "@/app/assets/svgs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Contact(): ReactElement {
  const notifySubmitSuccess = () => {
    toast.success(
      `We have received your message. You can expect feedback from us within 24-48 hours.`,
      {
        theme: "dark",
      }
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const subjectInput = form.querySelector("#subject") as HTMLInputElement;
    const messageInput = form.querySelector("#message") as HTMLTextAreaElement;

    if (emailInput.value && subjectInput.value && messageInput.value) {
      notifySubmitSuccess();
      emailInput.value = "";
      subjectInput.value = "";
      messageInput.value = "";
    } else {
      return <></>;
    }
  };

  return (
    <div className="mt-14 laptop:mt-16 space-y-6 tablet:space-y-4 desktop:space-y-2">
      <h1
        className={`text-5xl tablet:text-6xl laptop:text-7xl flex flex-col items-center text-primaryPurple text-center tablet:text-left`}
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        CONTACT US.
      </h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-48 tablet:w-60 laptop:w-80 h-1 desktop:my-4 border-0 rounded bg-gray-200" />
        <div className="absolute px-4 -translate-x-1/2 left-1/2 rounded-lg bg-secondaryPurple">
          <Image
            priority
            src={QuoteIcon}
            alt="Quote Icon"
            height={28}
            width={28}
          />
        </div>
      </div>
      <section className="flex bg-white px-6 pt-0 tablet:pt-2 desktop:pt-4 justify-center">
        <div
          className={`px-4 w:max-w-sm tablet:max-w-lg laptop:max-w-xl`}
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <p className="mb-4 tablet:mb-6 font-light text-center text-gray-500 text-14 laptop:text-16 leading-normal tablet:leading-normal laptop:leading-relaxed">
            Thanks for choosing us to plan your next vacation. Please complete
            this form if you have any concerns and {`we'll`} get back to you as
            soon as we can!
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondaryPurple focus:border-secondaryPurple block w-full p-2.5"
                placeholder="name@mammamiatours.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-secondaryPurple focus:border-secondaryPurple"
                placeholder="Let us know your inquiry"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-secondaryPurple focus:border-secondaryPurple"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-pastelBlue active:bg-primaryPurple focus:ring-4 focus:outline-none focus:ring-secondaryPurple"
            >
              Send message
            </button>
            <ToastContainer />
          </form>
        </div>
      </section>
    </div>
  );
}
