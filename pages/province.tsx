import { Alert, AlertDescription, AlertIcon, AlertTitle, Spinner, Text } from "@chakra-ui/react";
import Layout from "layouts/Layout";
import { ReactElement } from "react";
import { useGetProvince } from "services/province.swr.service";

type Props = {};
const ProvincePage = (props: Props) => {
  const { province, isLoading, isError } = useGetProvince();

  if (isLoading) return <Spinner />;

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
      </Alert>
    );
  }

  return <>{province && province.map((item) => <Text key={item.id}>{item.name}</Text>)}</>;
};

ProvincePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default ProvincePage;
