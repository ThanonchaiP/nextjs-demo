import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Layout from "../layouts/Layout";
import type { NextPageWithLayout } from "./_app";
import { getAPIVersion } from "services/api.service";
import { Version } from "types/version.types";
import { Course } from "types/course.types";
import { getAPICourse } from "services/course.service";

type Data = {
  message: string;
  total: number;
};

export const getServerSideProps: GetServerSideProps<{ data: Data; version: Version; courses: Course[] }> = async (
  context
) => {
  const response = await getAPIVersion();
  const version = response.data;

  const result = await getAPICourse();
  const course = result.data.data;

  const data: Data = {
    message: "Hello SSR",
    total: 100,
  };

  return {
    props: {
      data,
      version,
      courses: course,
    },
  };
};

const ProductPage: NextPageWithLayout = ({
  data,
  version,
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Container my={4} maxW={"1280px"}>
      <Heading mb={2}>
        สินค้า {data.message} {data.total}
      </Heading>
      <Text>Version : {version.data.version}</Text>
      <Divider />

      <SimpleGrid columns={3} spacing="10px">
        {courses.length > 0 &&
          courses.map((item) => (
            <Card maxW="sm" key={item.id}>
              <CardBody>
                <Image src={item.picture} alt={item.detail} borderRadius="lg" />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.title}</Heading>
                  <Text>{item.detail}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    View {item.view}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </Container>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProductPage;
