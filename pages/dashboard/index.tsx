import { Heading, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { ReactElement, useEffect } from "react";
import { getProfile, selectProfile } from "slice/authSlice";
import { useAppDispatch, useAppSelector } from "store/configureStore";
import DashboardLayout from "../../layouts/DashboardLayout";
import type { NextPageWithLayout } from "../_app";

const DashboardPage: NextPageWithLayout = () => {
  const { data: session } = useSession();
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile({ id: 1, email: "test", fullname: "Nonnnnnnnn" }));
  }, [dispatch]);
  return (
    <>
      <Heading mb={4}>Dashboard</Heading>
      {session?.user && <Heading>Welcome {session.user.name}</Heading>}
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt minima rem obcaecati maxime voluptatum vero.
        Velit earum commodi sapiente voluptatum tempore quidem suscipit nihil, illum deleniti. Accusantium, optio
        perspiciatis?
      </Text>

      {profile && <Heading mt={5}>Hello {profile.fullname}</Heading>}
    </>
  );
};

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
