"use client";

import { ThemeProvider as Provider } from "next-themes";

const ThemeProvider = ({ children, ...props }) => (
  <Provider {...props}>{children}</Provider>
);

export default ThemeProvider;
