import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

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

const DocInfo = ({ name, specialization, status, facebook, viber }) => {
  const classes = useStyles();
  if (facebook == null) {
    return (
      <GridContainer justify="center">
        <Card style={{ width: "20rem" }}>
          <CardBody>
            <h4 className={classes.cardTitle}>{name}</h4>
            <h6 className={classes.cardSubtitle}>{specialization}</h6>
            <p>{status}</p>

            <h6>ဖုန်းနံပါတ် : {viber}</h6>
          </CardBody>
        </Card>
      </GridContainer>
    );
  }
  if (viber == null) {
    viber = "Not given";
  }
  return (
    <GridContainer justify="center">
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{name}</h4>
          <h6 className={classes.cardSubtitle}>{specialization}</h6>
          <p>{status}</p>

          <h6>ဖုန်းနံပါတ် : {viber}</h6>
          <a href={facebook} target="_blank" className={classes.cardLink}>
            <Button color="facebook">
              <i className={" fab fa-facebook-square"} />
              မေးမြန်းရန် နှိပ်ပါ
            </Button>
          </a>
        </CardBody>
      </Card>
    </GridContainer>
  );
};

export default DocInfo;
