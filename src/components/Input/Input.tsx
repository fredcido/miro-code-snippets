import classNames from "classnames";
import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, id, className, ...rest }: Props) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input className={classNames("input", className)} id={id} {...rest} />
    </>
  );
}
