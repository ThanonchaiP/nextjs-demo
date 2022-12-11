import type { ReactElement } from "react";
import AppHero from "@/components/AppHero";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <AppHero />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
