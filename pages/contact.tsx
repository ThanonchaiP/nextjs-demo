import { Container, Heading, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";

const ContactPage: NextPageWithLayout = () => {
  return (
    <Container>
      <Heading>ติดต่อเรา</Heading>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt minima rem obcaecati maxime voluptatum vero.
        Velit earum commodi sapiente voluptatum tempore quidem suscipit nihil, illum deleniti. Accusantium, optio
        perspiciatis?
      </Text>
    </Container>
  );
};

ContactPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ContactPage;
