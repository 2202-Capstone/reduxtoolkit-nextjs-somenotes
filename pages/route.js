import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
// you could visit this page when you go to '/route',, its route because of this file's name.
// look at this import Link here thats basically like react-router's link but instead of the prop "to" next's link uses "href"
import Link from "next/link";
export default function RoutePage() {
  return (
    <Box p={10}>
      <Heading>So this is how routing works</Heading>
      <Text fontSize="xl">
        You create a new file in the pages directory and the name of that file
        could
        <br />
        be routed to [website-name/name-of-file] like this file right now. It is
        accessed in the /route link (look at ur link now),, pretty cool huh
        <br />
        <br />
        if you name ur file index.js directly in the pages directory then that
        would just route to --&gt; / -- which had our counter application.
      </Text>
      <Button mt={8}>
        <Link href="/more-routes">But wait there is more...</Link>
      </Button>
    </Box>
  );
}
