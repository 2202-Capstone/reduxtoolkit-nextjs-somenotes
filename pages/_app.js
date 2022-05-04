import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store";
// we also do the same thing for providing the store like the old redux
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
