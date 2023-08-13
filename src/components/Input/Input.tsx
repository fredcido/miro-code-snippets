import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, ...rest }: Props) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className="input" id={id} {...rest} />
    </>
  );
}
