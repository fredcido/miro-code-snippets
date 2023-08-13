import React from "react";
import Image from "next/image";

type Props = {
  icon: string;
};

export function Icon({ icon }: Props) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      width={24}
      height={24}
      alt={icon}
      loading="lazy"
    />
  );
}
