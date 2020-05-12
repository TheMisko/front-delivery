import React from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#276191  ",
  },
}));
const links = [
  { link: "/pizza", text: "Pizza" },
  { link: "/paste", text: "Paste" },
  { link: "/sendvici", text: "Sendvici" },
  { link: "/deserti", text: "Deserti" },
];
const ExpansionPannel = () => {
  const classes = useStyles();
  return (
    <div className="expansion-container">
      {" "}
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className="menu-icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="expa-meni">
            <h1>MENI</h1>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="expansion-links">
            {links.map((link) => (
              <Link style={{ textDecoration: "none" }} to={link.link}>
                {" "}
                <div className="menu-btn">
                  {" "}
                  <Button color="primary" variant="contained">
                    {link.text}
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default ExpansionPannel;
