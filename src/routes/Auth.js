import React from "react";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
export default function Auth() {
  const { mode } = useParams();
  return (
    <div>
      <AuthForm mode={mode} />
      <Footer />
    </div>
  );
}
