import React from "react";
import YgnClinicInfo from "./YgnClinicInfo";
import { ygnClinicData } from "../../../../data/YgnClinicData";

export default function YgnClinicSection() {
  return (
    <div>
      <details>
        <summary>အလုံ</summary>
        {ygnClinicData.Alone.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ဗဟန်း</summary>
        {ygnClinicData.Bahan.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ဒဂုံဆိပ်ကမ်း</summary>
        {ygnClinicData.DagonSateKan.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ဒလ</summary>
        {ygnClinicData.Dala.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ဒေါပုံ</summary>
        {ygnClinicData.DawPone.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>အရှေ့ဒဂုံ</summary>
        {ygnClinicData.EastDagon.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>လှိုင်</summary>
        {ygnClinicData.Hlaing.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>လှိုင်သာယာ</summary>
        {ygnClinicData.HlaingTharyar.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>မှော်ဘီ</summary>
        {ygnClinicData.HmawBi.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>အင်းစိန်</summary>
        {ygnClinicData.Insein.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ကမာရွတ်</summary>
        {ygnClinicData.Kamaryut.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        {ygnClinicData.KyiMyintDine.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>လမ်းမတော်</summary>
        {ygnClinicData.Lanmadaw.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>လသာ</summary>
        {ygnClinicData.Latha.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>မရမ်းကုန်း</summary>
        {ygnClinicData.Mayangone.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>မင်္ဂလာတောင်ညွန့်</summary>
        {ygnClinicData.MingalarTaungNyunt.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>မြောက်ဒဂုံ</summary>
        {ygnClinicData.NorthDagon.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>မြောက်ဥက္ကလာပ</summary>
        {ygnClinicData.NorthOakkala.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ရွှေပြည်သာ</summary>
        {ygnClinicData.ShwePyiThar.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>တောင်ဒဂုံ</summary>
        {ygnClinicData.SouthDagon.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>တောင်ဥက္ကလာပ</summary>
        {ygnClinicData.SouthOakkala.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>တာမွေ</summary>
        {ygnClinicData.Tarmwe.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>သန်လျင်</summary>
        {ygnClinicData.Thanlyin.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>သာကေတ</summary>
        {ygnClinicData.Tharkayta.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>သင်္ဃန်းကျွန်း</summary>
        {ygnClinicData.ThinganGyun.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
        <summary>ရန်ကင်း</summary>
        {ygnClinicData.Yankin.map((data, key) => {
          return (
            <div key={key}>
              <YgnClinicInfo
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
      <br />
    </div>
  );
}
