import React from "react";
import { useRouter } from "next/router";

// !!READ!! if u came here first i recommend u go to the index.js file of this directory first and then the [id].js

//try going to /more-routes/hello/hi/blabla/random then check out ur console log. cool ey?

export default function SomePageUnderMoreRoutes() {
  const router = useRouter();
  console.log(router.query.slug);
  return <div>SomePageUnderMoreRoutes</div>;
}
