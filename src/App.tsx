import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import PageArea from "./components/PageArea";
import AppTheme from "./style/AppTheme";

const App: React.FunctionComponent = () => {
  return (
    <div id="app">
      <MuiThemeProvider theme={AppTheme}>
        <Router>
          <Header />
          <PageArea />
          <Footer />
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
