import type { NextPage } from 'next'
import React, { TouchEvent,useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Skeleton } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import {
  Box,
  Grid,
  GridItem,
  Badge,
  SkeletonText,
  SkeletonCircle,
  Flex,
} from "@chakra-ui/react";
import useSWR from "swr";
import { StarIcon } from "@chakra-ui/icons";
import { skills } from '../data/data';
import Flippy, { FrontSide, BackSide } from "react-flippy";

// function Card() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const url = "https://pokeapi.co/api/v2/pokemon";
//   // @ts-ignore
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   // const { data, loading, error } = useRemoteData();
//   if (error) return <Box children="error" />;
//   return (
//     <Box>
//       <Skeleton isLoaded={!loading}>
//         <Heading>{data.title}</Heading>
//       </Skeleton>
//     </Box>
//   );
// }
function Property(){
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Flippy
      flipOnHover={true} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      // ref={(r:any) => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      // style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
    >
      <FrontSide>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          // height={200}
          // width={200}
        >
          <Image
            height={400}
            width={400}
            src={property.imageUrl}
            alt={property.imageAlt}
          />
          {/* <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box> */}
        </Box>
      </FrontSide>
      <BackSide>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          // height={200}
          // width={200}
        >
          <Image
            height={200}
            width={400}
            src={property.imageUrl}
            alt={property.imageAlt}
          />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.beds} beds &bull; {property.baths} baths
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {property.title}
            </Box>

            <Box>
              {property.formattedPrice}
              <Box as="span" color="gray.600" fontSize="sm">
                / wk
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {property.reviewCount} reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </BackSide>
    </Flippy>
  );
}
const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Chakra skeleton</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        flexDirection={["column", "column", "row"]}
        // flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
        gap="2"
      >
        {skills.map((skill) => (
          <Property />
        ))}
      </Flex>

      {/* <Stack lineHeight={1200} maxWidth={1000}>
        <Box padding="6" boxShadow="lg" bg="white">
          <SkeletonText mb="4" noOfLines={2} spacing="4" />
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
        </Box>
      </Stack> */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default Home
