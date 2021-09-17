import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/home/HomePage";

const useStyles = makeStyles({
  pageArea: {}
});

const PageArea: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageArea}>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageArea;
