import React,{useState} from 'react'

export default function BasicFormValidation() {
    // const [userName, setUsername] = useState("");
  const [userLessError, setUserLessError] = useState(false);
  const [userMaxError, setUserMaxError] = useState(false);


  function formHandler(e) {
    e.prevenDefault();
  }
  function userHandler(val) {
    let valueLength = val.target.value.length;


    if (valueLength > 10) {
      setUserMaxError(true);
    }
    if (valueLength < 10 && valueLength > 4) {
      setUserMaxError(false);
      setUserLessError(false);
    }


    if (valueLength < 4) {
      setUserLessError(true);
    }


    console.log(valueLength);
  }

  return (
    <div>
        <h1>Form</h1>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='Username' onChange={userHandler} />
        {userLessError ? <p>Must be atlest 4 Chracter</p> : ""}
        {userMaxError ? <p>Must be Less than 10 Chracter</p> : ""}
        <br /> <br />
        <input type='text' placeholder='Password' />
        <br /> <br />
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}
