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

const OnlineClinicInfo = ({ name, category, facebook }) => {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <Card style={{ width: "20rem" }}>
        <CardBody>
          <h4 className={classes.cardTitle}>{name}</h4>
          <p>{category}</p>
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

export default OnlineClinicInfo;
