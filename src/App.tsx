import { FormEvent, useState } from "react";
import { AccountForm } from "./forms/AccountForm";
import { AddressForm } from "./forms/AddressForm";
import { UserForm } from "./forms/UserForm";
import { useMultiForm } from "./useMultiForm";

type formdata = {
  firstname : string,
  lastname:string,
  age:string,
  street:string,
  city:string,
  state:string,
  pincode:string,
  email:string,
  password:string,
}

const INI_DATA : formdata = {
  firstname : "",
  lastname:"",
  age:"",
  street:"",
  city:"",
  state:"",
  pincode:"",
  email:"",
  password:"",
}

function App() {

  const [data , setdata] = useState(INI_DATA)

  function updateFields(fields : Partial<formdata>) {
    setdata(prevdata => {
      return {...prevdata , ...fields}
    })
  }

  const { steps, currStep, step, isFirstStep, isLastStep, back, next } =
    useMultiForm([
      <UserForm  {...data} updateFields={updateFields}/>,
      <AddressForm  {...data} updateFields={updateFields}/>,
      <AccountForm  {...data} updateFields={updateFields}/>
    ]);

  function handleSubmit(e : FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("form is finished")
    console.log(data)
  }



  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        width:"25rem"
      }}
    >
      <form onSubmit={handleSubmit} >
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
          }}
        >
          {currStep + 1}/ {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button onClick={back} type="button">
              Back
            </button>
          )}
            <button type="submit">
          {!isLastStep ? "next" : "finish"}
            </button>
        </div>
      </form>
    </div>
  );
}

export default App;
