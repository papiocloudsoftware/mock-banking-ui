import { Card, makeStyles } from "@material-ui/core";
import Color from "color";
import * as React from "react";
import { Link } from "react-router-dom";

import toolsImage from "../../content/images/home/banking-tools.jpg";
import debitImage from "../../content/images/home/debit-payment.jpg";
import teamWorkImage from "../../content/images/home/teamwork.jpg";
import { AppColors } from "../../style/AppTheme";

const benefits: Benefit[] = [
  {
    title: "Financial Tools",
    details: "We've got tools to assist your business needs",
    image: toolsImage,
    linkText: "View a Demo",
    link: "/small-business/tools"
  },
  {
    title: "Checking",
    details: "Free paycheck distribution with a business checking account",
    image: debitImage,
    linkText: "Read More",
    link: "/small-business/checking"
  },
  {
    title: "Expert Help",
    details: "Experts available for your questions any day of the week",
    image: teamWorkImage,
    linkText: "Contact One Now",
    link: "/small-business/support"
  }
];

const useStyles = makeStyles({
  section: {
    marginTop: 0,
    backgroundColor: new Color(AppColors.backgroundAlternateLight).lighten(0.25).hex()
  },
  heading: {
    display: "flex",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "1rem",
    "& h3": {
      fontWeight: 450
    }
  },
  content: {
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "2rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem"
  },
  benefitContainer: {
    width: `${100.0 / benefits.length}%`,
    minWidth: "300px",
    paddingBottom: "1rem"
  },
  benefit: {
    textAlign: "center",
    width: "250px",
    margin: "auto",
    padding: "1rem",
    backgroundColor: "#ffffff88",
    "& img": {
      height: "100px",
      width: "100px",
      objectFit: "cover",
      borderRadius: "5px",
      borderStyle: "solid",
      borderColor: `${new Color(AppColors.backgroundAlternateLight).darken(0.25).hex()}66`,
      borderWidth: "1px",
      marginBottom: "1rem"
    },
    "& h1": {
      fontWeight: 400,
      marginBottom: "2rem"
    },
    "& p": {
      marginBottom: "2rem"
    },
    "& a": {
      textDecoration: "none",
      color: AppColors.primaryLight,
      "&:hover": {
        color: `${AppColors.primaryLight}aa`
      }
    }
  }
});

interface Benefit {
  readonly title: string;
  readonly details: string;
  readonly image: string;
  readonly linkText: string;
  readonly link: string;
}

const SmallBusinessSection: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.heading}>
        <h3>{"WE'VE GOT SMALL BUSINESSES COVERED"}</h3>
      </div>
      <div className={classes.content}>
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className={classes.benefitContainer}>
              <Card raised className={classes.benefit}>
                <img src={benefit.image} />
                <h1>{benefit.title}</h1>
                <p>{benefit.details}</p>
                <Link to={benefit.link}>{benefit.linkText}</Link>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallBusinessSection;
