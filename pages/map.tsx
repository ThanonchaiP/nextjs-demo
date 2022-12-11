import { Container, Heading, Text } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Province = {
  name: string;
  postcode: string;
};

export const getStaticProps: GetStaticProps<{ provinces: Province[] }> = async (context) => {
  const provinces: Province[] = [
    { name: "Nong Bua Lamphu", postcode: "39000" },
    { name: "Udon", postcode: "40000" },
  ];

  return {
    props: {
      provinces,
    },
    //revalidate:10 ISR
  };
};

const MapPage = ({ provinces }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container my={4} maxW={"1280px"}>
      <Heading mb={2}>แผนที่</Heading>
      <Text mb={4}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea sunt minima rem obcaecati maxime voluptatum vero.
        Velit earum commodi sapiente voluptatum tempore quidem suscipit nihil, illum deleniti. Accusantium, optio
        perspiciatis?
      </Text>

      {provinces.length > 0 &&
        provinces.map((item) => (
          <li key={item.name}>
            {item.name} {item.postcode}
          </li>
        ))}
    </Container>
  );
};

MapPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default MapPage;
