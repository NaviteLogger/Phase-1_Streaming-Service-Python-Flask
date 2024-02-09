// This dile is used to initialize all pages. 
// You can use it to keep state when navigating between pages, 
// inject additional data into pages, and add global CSS
import "./style.css";

import React from "react";
export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return <Component {...pageProps} />;
}
