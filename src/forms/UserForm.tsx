import { FormWrapper } from "../utlities/FormWrapper";

type userData = {
  firstname : string,
  lastname : string,
  age:string,
}

type userFormprops = userData & {
  updateFields : (fields : Partial<userData>) => void
}


export function UserForm({firstname , lastname , age , updateFields} : userFormprops) {
  return (
    <FormWrapper title="User Form">
      <label>First Name</label>
      <input autoFocus required type="text" value={firstname} onChange={e => updateFields({firstname : e.target.value})} />
      <label>Last Name</label>
      <input required type="text" value={lastname} onChange={e => updateFields({lastname : e.target.value})} />
      <label>Age</label>
      <input required min={1} value={age} onChange={e => updateFields({age : e.target.value})} />
    </FormWrapper>
  );
}
