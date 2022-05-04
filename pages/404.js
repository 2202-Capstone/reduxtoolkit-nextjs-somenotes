import React from "react";

// if we create our own 404.js under the pages directory then we can create our own custom error
// page,, if there is none then it would use default built in

// try going to an unknown route
export default function ErrorPage() {
  return <div>Custom error stuff</div>;
}
