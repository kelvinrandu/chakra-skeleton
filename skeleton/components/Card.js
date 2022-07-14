import { Box } from "@chakra-ui/react";

function Card() {
  const { data, loading, error } = useRemoteData();
  if (error) return <Box children="error" />;
  return (
    <Box>
      <Skeleton isLoaded={!loading}>
        <Heading>{data.title}</Heading>
      </Skeleton>
    </Box>
  );
}
