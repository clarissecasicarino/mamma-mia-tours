import React, { ReactElement } from "react";

export default function Button({
  label,
  onClick,
  type = "rectangle",
}: {
  label: string;
  onClick?: () => void;
  type?: "rectangle" | "circular" | "special";
}): ReactElement {
  let buttonStyle;
  let textStyle;

  switch (type) {
    case "rectangle":
      buttonStyle = "bg-primaryPurple hover:bg-black active:bg-pastelBlue rounded-lg w-full laptop:w-60";
      textStyle = `text-white group-active:text-black ${"font-body"}`;
      break;
    case "circular":
      buttonStyle =
        "bg-tertiaryPurple w-32 hover:bg-primaryPurple active:bg-primaryPurple rounded-full";
      textStyle = `text-black group-hover:text-white group-active:text-white ${"font-body"} font-medium`;
      break;
    case "special":
      buttonStyle = "w-full tablet:w-36 bg-black hover:bg-pastelBlue active:bg-primaryPurple rounded-lg";
      textStyle = `text-primaryPurple ${"font-body"} text-14 group-hover:text-white`;
      break;
    default:
      buttonStyle = "";
      textStyle = "";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} group h-10`}
    >
      <span className={`${textStyle} text-14 font-semibold`}>{label}</span>
    </button>
  );
}
