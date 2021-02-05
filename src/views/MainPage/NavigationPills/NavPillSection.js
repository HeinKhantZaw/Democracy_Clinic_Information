import React from "react";

import NavPills from "components/NavPills/NavPills.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

//sections
import DoctorSection from "../Sections/Doctors/DoctorSection.js";
import OnlineClinicSection from "../Sections/OnlineClinics/OnlineClinicSection.js";
import YgnClinicSection from "../Sections/Clinic_Yangon/YgnClinicSection.js";
import OtherClinicSection from "../Sections/Clinic_Other_Cities/OtherClinicSection.js";
import WomenHospSection from "../Sections/WomenHosp/WomenHospSection.js";

export default function NavPillSection() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <NavPills
          color="danger"
          tabs={[
            {
              tabButton: "Volunteer ဆရာဝန်များ",
              tabContent: <DoctorSection />,
            },
            {
              tabButton: "For Pregnancy care",
              tabContent: <WomenHospSection />,
            },
            {
              tabButton: "Online ဆေးခန်းများ",
              tabContent: <OnlineClinicSection />,
            },
            {
              tabButton: "ရန်ကုန်မြို့ရှိ ဆေးခန်းများ",
              tabContent: <YgnClinicSection />,
            },
            {
              tabButton: "အခြားမြို့များရှိ ဆေးခန်းများ",
              tabContent: <OtherClinicSection />,
            },
          ]}
        />
      </GridItem>
    </GridContainer>
  );
}
