import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useHistory, useLocation } from "react-router-dom";

import StyledModal from "../../components/StyledModal";
import CheckingSection from "./CheckingSection";
import ProductAdsSection from "./ProductAdsSection";
import SmallBusinessSection from "./SmallBusinessSection";

const useStyles = makeStyles({
  homePage: {
    "& > div": {}
  }
});

const HomePage: React.FunctionComponent = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  function redirectToHome() {
    history.push("/");
  }

  return (
    <div className={classes.homePage}>
      <CheckingSection />
      <SmallBusinessSection />
      <ProductAdsSection />
      <StyledModal onClose={redirectToHome} open={location.pathname !== "/"}>
        <DialogTitle>TODO</DialogTitle>
        <DialogContent>
          <DialogContentText>{`We'll implement ${location.pathname} later!`}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={redirectToHome}>OK</Button>
        </DialogActions>
      </StyledModal>
    </div>
  );
};

export default HomePage;
