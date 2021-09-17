import {
  AccountCircleOutlined,
  HelpOutlineOutlined,
  RoomOutlined,
  Search,
  SearchOutlined,
  SvgIconComponent
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Color from "color";
import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import logo from "../content/images/horizontal-logo.png";
import { AppColors } from "../style/AppTheme";
import SignInComponent from "./SignInComponent";

interface HeaderIcon {
  readonly SvgIconComponent: SvgIconComponent;
  readonly text?: string;
  readonly hoverText?: string;
  readonly link?: string;
  readonly action?: () => void;
}

const hoverColor = `${AppColors.primaryDark}99`;

const useStyles = makeStyles({
  header: {
    backgroundColor: AppColors.backgroundLight,
    color: AppColors.primaryDark,
    display: "flex",
    height: "80px",
    alignItems: "center",
    borderBottomStyle: "solid",
    borderBottomWidth: "1px",
    borderBottomColor: new Color(AppColors.backgroundAlternateLight).darken(0.25).hex(),
    paddingLeft: "1rem",
    paddingRight: "1rem"
  },
  leftContent: {
    marginRight: "auto"
  },
  centerContent: {
    fontSize: "22px",
    fontWeight: 700,
    fontFamily: "Apple Chancery"
  },
  "@media only screen and (max-width: 850px)": {
    centerContent: {
      visibility: "hidden"
    }
  },
  rightContent: {
    display: "flex",
    marginLeft: "auto",
    paddingRight: ".5rem"
  },
  logo: {
    height: "80px"
  },
  icon: {
    display: "flex",
    alignItems: "center",
    "& > svg": {
      margin: "5px"
    },
    "&:hover": {
      cursor: "pointer",
      color: hoverColor
    }
  }
});

interface HeaderState {
  hoverIcon?: SvgIconComponent;
  signingIn: boolean;
}

const Header: React.FunctionComponent = () => {
  const classes = useStyles();
  const [state, setState] = useState<HeaderState>({ signingIn: false });
  const history = useHistory();

  function signIn() {
    setState({
      ...state,
      signingIn: true
    });
  }

  const headerIcons: HeaderIcon[] = [
    { SvgIconComponent: SearchOutlined, hoverText: "Search" },
    { SvgIconComponent: HelpOutlineOutlined, hoverText: "Support", link: "/support" },
    { SvgIconComponent: RoomOutlined, hoverText: "Locations", link: "/map" },
    { SvgIconComponent: AccountCircleOutlined, text: "Sign In", action: signIn }
  ];

  return (
    <header className={classes.header}>
      <div className={classes.leftContent}>
        <img className={classes.logo} src={logo} />
      </div>
      <div className={classes.centerContent}>
        <p>{'Bringing banking to you at "Mock" Speed!'}</p>
      </div>
      <div className={classes.rightContent}>
        {headerIcons.map((icon, index) => {
          const defaultAction = () => {
            history.push(icon.link!);
          };
          const action = icon.action ?? defaultAction;
          return (
            <div
              key={index}
              className={classes.icon}
              onMouseEnter={() => setState({ ...state, hoverIcon: icon.SvgIconComponent })}
              onMouseLeave={() => setState({ ...state, hoverIcon: undefined })}
              onClick={action}
            >
              <icon.SvgIconComponent
                htmlColor={state.hoverIcon === icon.SvgIconComponent ? hoverColor : AppColors.primaryDark}
              />
              {icon.text ? <p>{icon.text}</p> : undefined}
            </div>
          );
        })}
      </div>
      <SignInComponent open={state.signingIn} onClose={() => setState({ ...state, signingIn: false })} />
    </header>
  );
};

export default Header;
