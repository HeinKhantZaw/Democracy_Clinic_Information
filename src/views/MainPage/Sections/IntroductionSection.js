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
            OPD.
            <br />"<b>Volunteer ဆရာဝန်များ</b>" သည်
            အပြင်တွင်ဆက်သွယ်မေးမြန်းနိုင်ရန် ဖုန်းနံပါတ် သို့မဟုတ် ဆက်သွယ်ရမည့်
            Facebook လိပ်စာပေးထားသည့် volunteer ဆရာဝန်များဖြစ်ပါသည်။
            <br />"<b>For Pregnancy care</b>" သည်
            ရန်ကုန်ဗဟိုအမျိုးသမီးဆေးရုံကြီးမှ သားဖွားမီးယပ် အထူးကုများနှင့်
            ဆက်သွယ်လို့ရသော information များဖြစ်ပါသည်။
            <br />"<b>Online ဆေးခန်းများ</b>" သည် Online မှတစ်ဆင့်
            ဆက်သွယ်မေးမြန်းနိုင်သော Facebook page များကိုစုဆောင်းဖော်ပြထားခြင်း
            ဖြစ်ပါသည်။
            <br />"<b>ရန်ကုန်မြို့ရှိ ဆေးခန်းများ</b>" နှင့် "
            <b>အခြားမြို့များရှိ ဆေးခန်းများ</b>" သည် အပြင်တွင်
            သွားရောက်ကုသနိုင်သော ဆေးခန်း များကို ‌စုဆောင်းဖော်ပြထားခြင်း
            ဖြစ်ပါသည်။
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
