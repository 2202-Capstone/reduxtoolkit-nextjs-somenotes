import { Fragment as Fr } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fr>
      <Navbar />
      {children}
    </Fr>
  );
}
