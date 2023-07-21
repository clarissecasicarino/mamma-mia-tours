import React, { ReactElement } from "react";

export default function Button({
  label,
  isLoading,
  onClick,
  type = "solid",
  btnType = "button",
}: {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "solid" | "outline" | "solid-green";
  btnType?: "button" | "submit" | "reset";
}): ReactElement {
  let buttonStyle;
  let textStyle;

  switch (type) {
    case "solid":
      buttonStyle =
        "bg-electricBlue-500 hover:bg-green-500 active:bg-green-700";
      textStyle =
        "text-white group-hover:text-electricBlue-500 group-active:text-white";
      break;
    case "solid-green":
      buttonStyle =
        "bg-green-500 hover:bg-electricBlue-500 active:bg-electricBlue-300";
      textStyle =
        "text-electricBlue-500 group-hover:text-white group-active:text-white";
      break;
    case "outline":
      buttonStyle =
        "border-2 border-electricBlue-500 hover:border-green-500 active:bg-green-500";
      textStyle = "text-electricBlue-500";
      break;
    default:
      buttonStyle = "";
      textStyle = "";
      break;
  }
  return (
    <button
      type={btnType}
      onClick={onClick}
      className={`${buttonStyle} group h-12 w-full flex-1 rounded-full`}
    >
      <div className="flex flex-1 flex-row items-center justify-center">
        {isLoading && (
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span className={`${textStyle} text-lg font-medium`}>{label}</span>
      </div>
    </button>
  );
}
