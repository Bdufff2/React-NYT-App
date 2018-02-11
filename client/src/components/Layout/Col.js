import react from "react";

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;