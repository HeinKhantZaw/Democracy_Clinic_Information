import React from "react";

import { womenHospData } from "../../../../data/WomenHospData";

import { makeStyles } from "@material-ui/core/styles";
// core components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
export default function DoctorSection() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {womenHospData.map((data, key) => {
          return (
            <Grid key={key} item xs={12} sm={3}>
              <Paper className={classes.paper}>
                <h4 className={classes.cardTitle}>{data.name}</h4>
                <h5 className={classes.cardSubtitle}>
                  ဖုန်းနံပါတ် : {data.phone}
                </h5>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
