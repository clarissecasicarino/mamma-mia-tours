import React, { ReactElement } from "react";

export default function Button({
  label,
  onClick,
  type = "rectangle",
}: {
  label: string;
  onClick?: () => void;
  type?: "rectangle" | "circular" | "special" | "headerBtn";
}): ReactElement {
  let buttonStyle;
  let textStyle;

  switch (type) {
    case "rectangle":
      buttonStyle = "bg-primaryPurple hover:bg-black active:bg-pastelBlue rounded-lg w-full h-10 laptop:w-60";
      textStyle = `text-white group-active:text-black ${"font-body"}`;
      break;
    case "circular":
      buttonStyle =
        "bg-tertiaryPurple w-32 h-10 hover:bg-primaryPurple active:bg-primaryPurple rounded-full";
      textStyle = `text-black group-hover:text-white group-active:text-white ${"font-body"} font-medium`;
      break;
    case "special":
      buttonStyle = "w-full tablet:w-36 h-10 bg-black hover:bg-pastelBlue active:bg-primaryPurple rounded-lg";
      textStyle = `text-primaryPurple ${"font-body"} group-hover:text-white`;
      break;
    default:
      buttonStyle = "";
      textStyle = "";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} group`}
    >
      <span className={`${textStyle} text-12 laptop:text-14 font-semibold`}>{label}</span>
    </button>
  );
}
