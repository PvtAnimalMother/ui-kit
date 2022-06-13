import React, { LegacyRef } from "react";
import TextProps from "./props/Text.props";
import "../index.css";

export default React.forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  TextProps
>(({ children, variant = "paragraph" }, ref) => {
  switch (variant) {
    case "paragraph":
      return <p ref={ref as LegacyRef<HTMLParagraphElement>}>{children}</p>;
    case "h1":
      return <h1>1</h1>;
    case "h2":
      return <h1>1</h1>;
    case "h3":
      return <h1>1</h1>;
    case "h4":
      return <h1>1</h1>;
    case "h5":
      return <h1>1</h1>;
    case "h6":
      return <h1>1</h1>;
    case "span":
      return <span>1</span>;
  }
});

export { TextProps };
