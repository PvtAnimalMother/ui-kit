import React from "react";
import TextProps from "./props/Text.props";

export default React.forwardRef<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement,
  TextProps
>(({ children, variant }, ref) => <div>{children}</div>);

export { TextProps };
