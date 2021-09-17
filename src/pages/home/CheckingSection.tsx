import { Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Color from "color";
import * as React from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../../content/images/home/mastercard.jpg";
import { AppColors } from "../../style/AppTheme";

const useStyles = makeStyles({
  section: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    height: "400px"
  },
  checkingCard: {
    position: "relative",
    backgroundColor: "#ffffffaa",
    maxWidth: "350px",
    left: "40px",
    top: "40px",
    height: "320px"
  },
  content: {
    margin: "2rem",
    "& > *": {
      marginBottom: "2rem"
    }
  },
  buttonBar: {
    position: "absolute",
    display: "flex",
    bottom: "0px",
    width: "100%",
    "& *": {
      marginLeft: "auto"
    }
  },
  buttonLink: {
    marginLeft: "auto",
    marginRight: "2rem",
    marginBottom: "1rem"
  },
  button: {
    backgroundColor: AppColors.backgroundDark,
    "&:hover": {
      backgroundColor: new Color(AppColors.backgroundDark).lighten(0.5).hex()
    },
    color: AppColors.backgroundLight
  }
});

const CheckingSection: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Card raised className={classes.checkingCard}>
        <div className={classes.content}>
          <h5>Mock Checking</h5>
          <h2>Unlimited Mock money for all who sign up - Limited time offer!</h2>
          <p>Keep your account full with Mock money</p>
        </div>
        <div className={classes.buttonBar}>
          <Link className={classes.buttonLink} to="/banking">
            <Button className={classes.button}>Learn More</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CheckingSection;
