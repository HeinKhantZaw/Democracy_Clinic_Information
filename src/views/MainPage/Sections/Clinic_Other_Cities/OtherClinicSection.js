import React from "react";
import OtherClinicInfo from "./OtherClinicInfo";
import { OtherCitiesClinicData } from "../../../../data/OtherCitiesClinicData";

export default function YgnClinicSection() {
  return (
    <div>
      <details>
        <summary>ပဲခူး</summary>
        {OtherCitiesClinicData.Bago.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>

      <details>
        <summary>ဟင်္သာတ</summary>
        {OtherCitiesClinicData.Hintada.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>မန္တလေး</summary>
        {OtherCitiesClinicData.Mandalay.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>မအူပင်</summary>
        {OtherCitiesClinicData.MaUBin.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>မော်လမြိုင်</summary>
        {OtherCitiesClinicData.MawLaMyaing.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>မုံရွာ</summary>
        {OtherCitiesClinicData.MoneYwar.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>မြစ်ကြီးနား</summary>
        {OtherCitiesClinicData.MyitKyeeNar.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>နေပြည်တော်</summary>
        {OtherCitiesClinicData.NayPyiDaw.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>ပုသိမ်</summary>
        {OtherCitiesClinicData.Pathein.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>

      <details>
        <summary>စလင်း</summary>
        {OtherCitiesClinicData.SaLin.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>

      <details>
        <summary>တောင်ကြီး</summary>
        {OtherCitiesClinicData.TaungGyi.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
      <details>
        <summary>ကြည့်မြင့်တိုင်</summary>
        {OtherCitiesClinicData.Taungoo.map((data, key) => {
          return (
            <div key={key}>
              <OtherClinicInfo
                key={key}
                ClinicName={data.ClinicName}
                Hours={data.Hours}
                Address={data.Address}
                Phone={data.Phone}
              />
            </div>
          );
        })}
      </details>
    </div>
  );
}
