import { ReactNode } from "react";
import AppFooter from "../components/AppFooter";
import AppNavbar from "../components/AppNavbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppNavbar />
      {children}
      <AppFooter />
    </>
  );
};
export default Layout;
