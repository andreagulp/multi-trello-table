import React from "react";
import MUIDataTable from "mui-datatables";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  root: {
    overflow: "hidden",
    maxWidth: 200
    // padding: `0 ${theme.spacing.unit * 3}px`
  },
  wrapper: {},
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2
  }
});

class CardsTable extends React.Component {
  render() {
    const { tableCards, classes } = this.props;
    const columns = [
      {
        name: "Name",
        options: {
          filter: true
        }
      },
      {
        name: "Description",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Tooltip title={value}>
                <Typography
                  className={classes.root}
                  component="body1"
                  variant="body1"
                  gutterBottom
                  noWrap
                >
                  {value}
                </Typography>
              </Tooltip>
            );
          }
        }
      },
      {
        name: "last update date",
        options: {
          filter: false
        }
      },
      {
        name: "Board Name",
        options: {
          filter: true
        }
      },
      {
        name: "Status",
        options: {
          filter: true
        }
      },
      {
        name: "Labels",
        options: {
          filter: true
        }
      },
      {
        name: "Link",
        options: {
          filter: false
        }
      }
    ];

    const data = tableCards;

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"AM Trello Boards"}
        data={data}
        columns={columns}
        options={options}
        selectableRows={false}
        serverSide={true}
      />
    );
  }
}

export default withStyles(styles)(CardsTable);
