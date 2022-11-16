import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const isPrivacyPolicyPage = pathname === "/privacy-policy";

  return (
    <>
      <Header />
      <main>{children}</main>
      {!isPrivacyPolicyPage && <Footer />}
    </>
  );
};

export default Layout;
