import { Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import type { ReactElement } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import type { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  const { data: session } = useSession();
  return (
    <>
      <Heading>Dashboard</Heading>
      {session?.user && <Heading>Welcome {session.user.name}</Heading>}
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt minima rem obcaecati maxime voluptatum vero.
        Velit earum commodi sapiente voluptatum tempore quidem suscipit nihil, illum deleniti. Accusantium, optio
        perspiciatis?
      </Text>
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
