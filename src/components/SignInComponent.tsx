import { DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as axios from "axios";
import * as React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import StyledModal from "./StyledModal";

const useStyles = makeStyles({
  content: {}
});

interface SignInComponentProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

/** Axios client to be used for sending POST to /auth/signin **/
const client = axios.default;

/*
 * TODO: Implement this component, doing your best to style your component.  Feel free to
 *  use colors defined in {AppColors} from src/style/AppTheme.tsx and the Color class from "color"
 *  package to tweak those colors.
 *
 * There is a "Sign In" button in the upper right corner of the Header
 *
 * This component should contain the following:
 *  1. Text entry for Email and Password
 *  2. "Sign In" button that does a POST to /auth/signin then props.onClose() upon success (use axios)
 *  3. "Cancel" button that calls props.onClose() without doing any POST
 *  4. react-router-dom Link for "Forgot Username/Password" that sends to="/auth/reset"
 *  5. react-router-dom Link for "Set Up Online Access" that sends to="/auth/enroll"
 *
 * See example here for a Form Dialog: https://material-ui.com/components/dialogs/#form-dialogs
 *
 * TODO: NOTE: 200 status means successful login, 400 means invalid data sent, 401 means invalid credentials.
 *       For testing, use supersecure as the password as it will always trigger a 200 since the API is mocked.
 *       Be sure to relay errors to the user
 */

/**
 * TODO: Send a payload matching this interface!
 *
 * Request object for signing in
 */
export interface SignInRequest {
  readonly email: string;
  readonly password: string;
}

const SignInComponent: React.FunctionComponent<SignInComponentProps> = (props: SignInComponentProps) => {
  const classes = useStyles();

  // TODO: use useState to track state
  // TODO: Be sure to use these inputRefs in your TextField inputs!
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // TODO: Implement this method and make sure Sign In button calls it!
  function signIn() {
    console.log("TODO: Sign In");
    console.log(`Email: ${emailRef.current!.value}`);
    console.log(`Password: ${passwordRef.current!.value}`);
  }

  return (
    <StyledModal onClose={props.onClose} open={props.open}>
      <div className={classes.content}>
        <DialogTitle>TODO: Implement Here</DialogTitle>
      </div>
    </StyledModal>
  );
};

export default SignInComponent;
