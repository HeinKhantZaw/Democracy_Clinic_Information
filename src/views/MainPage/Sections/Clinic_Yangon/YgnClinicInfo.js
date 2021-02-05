import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// instead of importing the container from material-ui

// you would import our component like this
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  cardLink,
  cardSubtitle,
} from "assets/jss/material-kit-react.js";

const styles = {
  cardTitle,
  cardLink,
  cardSubtitle,
};

const useStyles = makeStyles(styles);

const YgnClinicInfo = ({ ClinicName, Address, Phone, Hours }) => {
  const classes = useStyles();
  if (Phone == null) {
    Phone = "Not given";
  }
  if (Hours == null) {
    Hours = "Not given";
  }
  if (Address == null) {
    Address = "Not Given";
  }
  return (
    <GridContainer justify="center">
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{ClinicName}</h4>
          <h6 className={classes.cardSubtitle}>ဖွင့်ချိန် : {Hours}</h6>
          <h6>လိပ်စာ : {Address}</h6>
          <h6>ဖုန်းနံပါတ် : {Phone}</h6>
        </CardBody>
      </Card>
    </GridContainer>
  );
};

export default YgnClinicInfo;
