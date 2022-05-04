import { HStack, Heading } from "@chakra-ui/react";
import NextLink from "next/link";
export default function Navbar() {
  return (
    <HStack p={8} spacing={8}>
      <NextLink href="/" passHref>
        <Heading fontWeight={"light"} cursor="pointer">
          Counter
        </Heading>
      </NextLink>
      <NextLink href="/route" passHref>
        <Heading fontWeight={"light"} cursor="pointer">
          How To Route In Next?
        </Heading>
      </NextLink>
    </HStack>
  );
}
