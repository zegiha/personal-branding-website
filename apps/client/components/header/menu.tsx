"use client";

import { useState } from "react";
import { IconButton } from "ui-kit/atom";

export function Menu() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <IconButton
        type={"button"}
        color={"transparent"}
        size={"medium"}
        iconKey={"menu"}
        onClick={() => setOpen((p) => !p)}
      />
    );
  } else {
    return (
      <>
        <IconButton
          type={"button"}
          color={"transparent"}
          size={"medium"}
          iconKey={"menu"}
          onClick={() => setOpen((p) => !p)}
        />
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 64,
            width: 400,
            height: 400,
            backgroundColor: "red",
            zIndex: 9999,
          }}
        />
      </>
    );
  }
}
