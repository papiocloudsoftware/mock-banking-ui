import { Card, Grow, makeStyles, Modal } from "@material-ui/core";
import * as React from "react";
import { PropsWithChildren } from "react";

const useStyles = makeStyles({
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    outline: "none"
  }
});

interface StyledModalProps {
  readonly className?: string;
  readonly style?: React.CSSProperties;
  readonly onClose: () => void;
  readonly open: boolean;
}

const StyledModal: React.FunctionComponent<StyledModalProps> = (props: PropsWithChildren<StyledModalProps>) => {
  const classes = useStyles();
  const contentClasses = [classes.content];
  if (props.className) {
    contentClasses.push(props.className);
  }
  return (
    <Modal className={classes.overlay} open={props.open} onClose={props.onClose}>
      <Grow in={props.open}>
        <Card className={contentClasses.join(" ")} style={props.style}>
          {props.children}
        </Card>
      </Grow>
    </Modal>
  );
};

export default StyledModal;
