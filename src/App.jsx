import React from "react";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import "./reset.css";
import GlobalStyle from "./GlobalStyle";
import { Layout } from "./Layout";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
