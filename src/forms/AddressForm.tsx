import { FormWrapper } from "../utlities/FormWrapper";

type addressData = {
  street : string,
  city : string,
  state:string,
  pincode : string,
}

type addressFormprops = addressData & {
  updateFields : (fields : Partial<addressData>) => void
}


export function AddressForm( {street , state , city , pincode , updateFields} : addressFormprops) {
  return (
    <FormWrapper title="Address Form" >
      <label>Street</label>
      <input autoFocus required type="text"  value={street} onChange={e => updateFields({street : e.target.value})}/>
      <label>City</label>
      <input required type="text" value={city} onChange={e => updateFields({city : e.target.value})}/>
      <label>State</label>
      <input required type="text" value={state} onChange={e => updateFields({state : e.target.value})}/>
      <label>Pincode</label>
      <input required type="text" value={pincode} onChange={e => updateFields({pincode : e.target.value})}/>
    </FormWrapper>
  );
}
