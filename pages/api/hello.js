// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// if ur curious to see how this works go to the route /api/hello (hello because of the name of this file)
// when u start up the local  dev server -- AMAZING RIGHT ahaha no need for node-express

// definitely read more docs on it, its pretty powerful
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
