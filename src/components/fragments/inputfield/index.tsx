import React, { useState, ChangeEvent } from "react";
import Image from "next/image";

type InputFieldProps = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  width: number;
  variation: string;
  label: string;
  black: boolean;
};

function InputField({
  type,
  name,
  placeholder,
  onChange,
  value,
  width,
  variation,
  label,
  black,
}: InputFieldProps) {
    const [hide, setHide] = useState(false);

    function handleHide() {
    setHide(!hide);
  }
    return (
        <div
      className={
        "relative " + (variation === "submission" ? "w-5/12" : "w-full")
      }
    >
      {variation === "submission" ? <label>{label}</label> : null}
      <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={
                "relative w-full p-2 my-2 border-2 rounded-lg border-customGrey focus:shadow-lg focus:outline-none " +
                (variation === "submission" ? "bg-nav " : "bg-white ") +
                (black ? "text-black" : "text-white")
              }
            />
            {name == "password" ? (
        <div className="absolute right-2 top-5">
          <Image
            onClick={() => handleHide()}
            width={20}
            height={20}
            alt="Show"
            src="/eye.svg"
            className="absolute cursor-pointer hover:opacity-60"
          />
        </div>
      ) : null}
    </div>
    );
}

export default InputField;