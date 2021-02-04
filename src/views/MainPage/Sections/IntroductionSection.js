import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function IntroductionSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Info</h2>
          <h4 className={classes.description}>
            These are doctors who are willing to help with teleconsultation and
            OPD. အောက်တွင်ဖော်ပြထားသော ဆရာဝန်များသည်
            အပြင်မှာဆက်သွယ်မေးမြန်းနိုင်သည့် ဖုန်းနံပါတ် ဒါမှမဟုတ် ဆက်သွယ်ရမည့်
            Facebook လိပ်စာပေးထားသော volunteer ဆရာဝန်များဖြစ်ပါသည်။
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
