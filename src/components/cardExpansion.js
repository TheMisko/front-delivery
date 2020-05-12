import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "rgb(172, 191, 211)",
  },
}));

const CardExpansion = ({ ingridients }) => {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {" "}
          <div className="ingridients-container">
            {ingridients.slice(0, 4).map((ingridient) => (
              <p>{ingridient}</p>
            ))}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <div className="ingridients-container">
              {ingridients.map((ingridient) => (
                <p>{ingridient}</p>
              ))}
            </div>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CardExpansion;
