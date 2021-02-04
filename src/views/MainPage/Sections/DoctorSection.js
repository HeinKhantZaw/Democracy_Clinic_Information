import React from "react";
import DocInfo from "./DocInfo";
import {docData} from "../../../data/data";

const styles = {
  textCenter: {
    textAlign: "center"
  }
};

export default function DoctorSection(){
  return (
    <div>  
      
      <details>
  <summary>အထွေထွေရောဂါကု</summary>
  {docData.GP.map((data, key)=>{
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>
  <details>
  <summary>အထူးကုသမားတော်</summary>
  {docData.Physician.map((data, key)=>{
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>
  <details>
  <summary>သွားဆေးဘက်ဆိုင်ရာ</summary>
  {docData.Dentist.map((data, key)=>{
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>နား၊ နှာခေါင်း၊ လည်ချောင်းဆိုင်ရာ</summary>
  {docData.Otorhinolaryngologist.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
 </details>

<details>
  <summary>အာဟာရဆိုင်ရာ</summary>
  {docData.Nutritionist.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>သားဖွားမီးယပ်ပိုင်းဆိုင်ရာ</summary>
  {docData.OG.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
 </details>

 <details>
  <summary>အကြောအဆစ်ပိုင်းဆိုင်ရာ</summary>
  {docData.Physiotherapist.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>နှလုံးအထူးကု</summary>
  {docData.Cardiologist.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>တီဘီနှင့်အဆုတ်ရောဂါအထူးကု</summary>
  {docData.Pulmonologist.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

<details>
  <summary>အရေပြားအထူးကု</summary>
  {docData.Dermatologists.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>ကလေးအထူးကု</summary>
  {docData.Pediatricians.map((data, key)=>{
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

  <details>
  <summary>ခွဲစိတ်အထူးကု</summary>
  {docData.SurgicalDoctor.map((data, key)=>{
    
    return(
      <div key={key}>
      <DocInfo 
      key={key}
      name ={data.name}
      specialization = {data.specialization}
      status = {data.status}
      facebook = {data.facebook}
      viber ={data.viber}/>
      </div>
    );
  })}
  </details>

<br/>
    </div>
  );
}