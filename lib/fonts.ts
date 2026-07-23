import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "../assets/fonts/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../assets/fonts/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const inter = localFont({
  src: [{ path: "../assets/fonts/Inter-variable.ttf", weight: "400 600", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
});
