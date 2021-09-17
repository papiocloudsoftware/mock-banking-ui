import { Facebook, Instagram, LinkedIn, SvgIconComponent, Twitter, YouTube } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import links from "../content/footer/links.json";
import logo from "../content/images/square-logo-light-notext.png";
import { AppColors } from "../style/AppTheme";

interface FooterLinks {
  [key: string]: FooterLink[];
}

interface FooterLink {
  readonly text: string;
  readonly link: string;
}

const useStyles = makeStyles({
  footer: {
    padding: "2rem",
    backgroundColor: AppColors.backgroundDark,
    color: AppColors.backgroundLight,
    alignItems: "center"
  },
  iconBar: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "2rem"
  },
  leftIcons: {
    display: "flex",
    marginRight: "auto",
    "& > *": {
      height: "40px"
    }
  },
  rightIcons: {
    display: "flex",
    marginLeft: "auto",
    "& > *": {
      marginLeft: "1rem",
      height: "25px",
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  linksSection: {
    display: "flex"
  },
  linksColumn: {
    lineHeight: "1.5rem",
    "& h5": {
      fontWeight: 450,
      fontSize: "14px",
      marginBottom: "1rem"
    }
  },
  link: {
    textDecoration: "none",
    color: AppColors.backgroundLight,
    fontWeight: 300,
    fontSize: "14px",
    "&:hover": {
      color: AppColors.backgroundAlternateLight
    }
  }
});

interface FooterState {
  hoverIcon?: SvgIconComponent;
}

const Footer: React.FunctionComponent = () => {
  const footerLinks: FooterLinks = links;
  const classes = useStyles();
  const width = 100.0 / Object.keys(footerLinks).length;

  const [state, setState] = useState<FooterState>({ hoverIcon: undefined });
  const icons: SvgIconComponent[] = [Instagram, Twitter, Facebook, LinkedIn, YouTube];

  return (
    <footer className={classes.footer}>
      <div className={classes.iconBar}>
        <div className={classes.leftIcons}>
          <img src={logo} />
        </div>
        <div className={classes.rightIcons}>
          {icons.map((IconComponent, index) => {
            return (
              <IconComponent
                key={index}
                htmlColor={state.hoverIcon === IconComponent ? AppColors.backgroundAlternateLight : undefined}
                onMouseEnter={() => setState({ hoverIcon: IconComponent })}
                onMouseLeave={() => setState({ hoverIcon: undefined })}
              />
            );
          })}
        </div>
      </div>
      <div className={classes.linksSection}>
        {Object.keys(footerLinks).map((name: string) => {
          return (
            <div key={name} className={classes.linksColumn} style={{ width: `${width}%` }}>
              <h5>{name}</h5>
              {footerLinks[name].map((link: FooterLink) => {
                return (
                  <p key={link.text}>
                    <Link to={link.link} className={classes.link}>
                      {link.text}
                    </Link>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
