import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { useState} from "react";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
import Contacts from "./Components/Contacts";



/*interface CustomerProps {
  name: string;
  fields: [];
}

interface newObj {
  section: []
}*/

function App() {
  //const objName = "customer"
 // const [customerObj, setCustomerObj] = useState({section:[]}

  const [errMessageSection, setErrMessageSection] = useState("")
  const [inputSection, setInputSection] = useState("")
  const [personalSection, setPersonalSection]=useState({name:'' , fields: []})
  const [addressSection, setAddressSection]=useState({name:'' , fields: []})
  const [contactsSection, setContactsSection]=useState({name:'' , fields: []})

/*  useEffect(()=> {
    const newCustomerObj = localStorage.getItem(objName)
    if (newCustomerObj) {
      setCustomerObj(JSON.parse(newCustomerObj));
    }
  },[]);*/

 /* const setNewObj = (newObj: newObj ) => {
    setCustomerObj(newObj);
    saveInLocalStorage(newObj);
  }*/

/*  const saveInLocalStorage = (newObj: newObj) => {
    localStorage.setItem(objName, JSON.stringify(newObj))
  }*/

  const addSection = () => {

    if (inputSection) {
      switch (inputSection) {
        case "Personal":
          setPersonalSection({name: "Personal", fields:[]})
          break;
        case "Address":
          setAddressSection({name: "Address", fields:[]})
          break;
        case "Contacts":
          setContactsSection({name: "Contacts", fields:[]})
          break;
      }
      /*const newCustomerObj = JSON.parse(JSON.stringify(customerObj));
      newCustomerObj.section.push({
        name: inputSection,
        fields: []
      });*/
      setErrMessageSection (" ");
   //   setNewObj(newCustomerObj);
    } else {
      setErrMessageSection (" Type Section Name");
    }
  }

  const takeSectionName = (event: { target: {value:string} }) => {
    setInputSection(event.target.value)
  }

const deleteSection = (sectionName: string) => {
  switch (sectionName) {
    case "Personal":
      setPersonalSection({name: '', fields:[]})
      break;
    case "Address":
      setAddressSection({name: '', fields:[]})
      break;
    case "Contacts":
      setContactsSection({name: '', fields:[]})
      break;
  }
    // const newCustomerObj = JSON.parse(JSON.stringify(customerObj))

    // newCustomerObj.section.map((section: CustomerProps,index : number ) => {
    //   if (section.name === sectionName) {
    //     newCustomerObj.section.splice(index,1)
    //   }
    // })
    // setNewObj(newCustomerObj);
  }

  return (
    <div className="App">
      <h1>Customer</h1>
      <div className="form-group col-md-6 border p-2 rounded bg-light">
        <select onChange={takeSectionName}>
          <option> </option>
          <option>Personal</option>
          <option>Address</option>
          <option>Contacts</option>
        </select>
        <button type="button" className="ml-2 btn btn-success" onClick={addSection}> Add</button>
        <p className="message">{errMessageSection}</p>
      </div>
      {personalSection.name ? <Personal name={personalSection.name} delete={() => deleteSection(personalSection.name)}/> : null}
      {addressSection.name ? <Personal name={addressSection.name} delete={() => deleteSection(addressSection.name)}/> : null}
      {contactsSection.name ? <Personal name={contactsSection.name} delete={() => deleteSection(contactsSection.name)}/> : null}

    </div>
  );
}

export default App;
