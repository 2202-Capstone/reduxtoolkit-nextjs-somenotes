import React from "react";
import { Box, Text } from "@chakra-ui/react";

/*
  as u can see this is in a folder called more-routes and the name of this file is index.js
   so it routes to "/more-routes/"

   but why, couldnt u just have created a file name called more-routes.js. You'll see, this actually makes it more flexible.
   checkout the [id].js in this folder.
*/
export default function MoreRoutePage() {
  return (
    <Box>
      <Text p="12" fontSize="xl">
        yeh i got too lazy to do it this way so ima just comment on the files go
        check it
      </Text>
    </Box>
  );
}
