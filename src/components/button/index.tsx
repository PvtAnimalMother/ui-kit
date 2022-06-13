import React, { forwardRef } from "react";

const index = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => <button {...{ ...props, ref }} />);

export default index;
