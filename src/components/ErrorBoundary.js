import React from "react";
import Icon from "@material-ui/core/Icon";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  root: {
    textAlign: "center"
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { classes } = this.props;

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={classes.root}>
          <h1>Something went wrong. Please open an issue so we can fix it </h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.ibm.com/RICCETTI/am-trello-dashboard/issues/new"
          >
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Open Issue
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary);
