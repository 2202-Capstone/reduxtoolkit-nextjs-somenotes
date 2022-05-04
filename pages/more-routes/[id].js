// !!READ!! if u came here FIRST i recommend u go back to the index.js file of this directory first
import React from "react";
import { Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
// checkout '/more-routes/1 or /more-routes/2 or /more-routes/whatever-you-want'
export default function SingleItemPage() {
  const router = useRouter();
  return <Heading>This is item #{router.query.id}</Heading>;
}
/*
  below is what useRouter returns. its got cool stuff like router.query.id which is like the match.params.id in
  react-router.. NOTE the key is id because of how we named the file which is [id].js... pretty neat,, you could see how
  this is really useful.

  its also got a cool router.push('/whatever-route-you-want-to-go-to'), its like the history.push function

  and router.back() which goes back to the previous route if there was any

  and more go check the docs out for them
*/

/*
asPath: "/more-routes/2"
back: ƒ ()
basePath: ""
beforePopState: ƒ ()
components: {/more-routes/[id]: {…}, /_app: {…}}
defaultLocale: undefined
events: {on: ƒ, off: ƒ, emit: ƒ}
isFallback: false
isReady: true
locale: undefined
locales: undefined
pathname: "/more-routes/[id]"
prefetch: ƒ ()
push: ƒ ()
query: {id: "2"}
reload: ƒ ()
replace: ƒ ()
route: "/more-routes/[id]"
*/
