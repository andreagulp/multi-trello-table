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
          filter: false
        }
      },
      {
        name: "Description",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <Tooltip title={value}>
                <Typography
                  className={classes.root}
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
          filter: false
        }
      },
      {
        name: "Product",
        options: {
          filter: true
        }
      },
      {
        name: "Owner",
        options: {
          filter: true
        }
      },
      {
        name: "Pending Reason",
        options: {
          filter: true
        }
      },
      {
        name: "Open Since (days)",
        options: {
          filter: false
        }
      },
      {
        name: "Link",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <a target="_blank" rel="noopener noreferrer" href={value}>
                {/* {value} */}
                <i className="fab fa-trello" />
              </a>
            );
          }
        }
      },
      {
        name: "Creation Date",
        options: {
          filter: false
        }
      },
      {
        name: "last update date",
        options: {
          filter: false
        }
      }
    ];

    const data = tableCards;

    const options = {
      filter: true,
      filterType: "multiselect",
      responsive: "scroll",
      selectableRows: false
      // resizableColumns: true
    };

    return (
      <MUIDataTable
        // title={"AM Trello Boards"}
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
