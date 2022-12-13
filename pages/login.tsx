import { ReactElement } from "react";
import { Container } from "@chakra-ui/react";
import Layout from "layouts/Layout";

const LoginPage = () => {
  return (
    <Container my={4} maxWidth="1200px">
      Login
    </Container>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LoginPage;
