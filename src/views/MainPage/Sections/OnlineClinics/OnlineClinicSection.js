import React from "react";
import OnlineClinicInfo from "./OnlineClinicInfo";
import { onlineClinicData } from "../../../../data/OnlineClinicData";

export default function DoctorSection() {
  return (
    <div>
      <details>
        <summary>အထွေထွေရောဂါကု</summary>
        {onlineClinicData.General.map((data, key) => {
          return (
            <div key={key}>
              <OnlineClinicInfo
                key={key}
                name={data.name}
                category={data.category}
                facebook={data.facebook}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>အာဟာရဆိုင်ရာ</summary>
        {onlineClinicData.Nutrition.map((data, key) => {
          return (
            <div key={key}>
              <OnlineClinicInfo
                key={key}
                name={data.name}
                category={data.category}
                facebook={data.facebook}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>ဆီးချို၊ နှလုံး၊ သွေးတိုး</summary>
        {onlineClinicData.Diabetes.map((data, key) => {
          return (
            <div key={key}>
              <OnlineClinicInfo
                key={key}
                name={data.name}
                category={data.category}
                facebook={data.facebook}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>ကလေးကျန်းမာရေးဆိုင်ရာ</summary>
        {onlineClinicData.Child.map((data, key) => {
          return (
            <div key={key}>
              <OnlineClinicInfo
                key={key}
                name={data.name}
                category={data.category}
                facebook={data.facebook}
              />
            </div>
          );
        })}
      </details>
      <br />
    </div>
  );
}
