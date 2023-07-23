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
      buttonStyle = "bg-primaryPurple hover:bg-black active:bg-pastelBlue";
      textStyle = `text-white group-active:text-black ${"font-body"}`;
      break;
    case "circular":
      buttonStyle =
        "border-2 border-electricBlue-500 hover:border-green-500 active:bg-green-500";
      textStyle = `text-electricBlue-500 ${"font-body"}`;
      break;
    case "special":
      buttonStyle =
        "border-2 border-electricBlue-500 hover:border-green-500 active:bg-green-500";
      textStyle = `text-electricBlue-500 ${"font-body"}`;
      break;
    default:
      buttonStyle = "";
      textStyle = "";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle} group h-10 w-60 tablet:w-full flex-1 rounded-lg`}
    >
      <span className={`${textStyle} text-18 font-semibold`}>{label}</span>
    </button>
  );
}
