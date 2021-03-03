import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import { useState} from "react";
import Personal from "./Components/Personal";
import Address from "./Components/Address";
import Contacts from "./Components/Contacts";

interface CustomerProps {
  name: string;
  fields: {
    inputName?: string;
    inputType?: string
  }[];
}

interface Obj {
  [key : string]: string;
}

function App() {

  const [errMessageSection, setErrMessageSection] = useState("")
  const [inputSection, setInputSection] = useState("")
  const [personalSection, setPersonalSection]=useState<CustomerProps>({name:'' , fields: []})
  const [addressSection, setAddressSection]=useState<CustomerProps>({name:'' , fields: []})
  const [contactsSection, setContactsSection]=useState<CustomerProps>({name:'' , fields: []})

  //***** Add new Section to state
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
      setErrMessageSection (" ");
    } else {
      setErrMessageSection (" Type Section Name");
    }
  }

  //***** Take Section Name on input change
  const takeSectionName = (event: { target: {value:string} }) => {
    setInputSection(event.target.value)
  }

  //***** Delete Section from state
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
  }

  //***** Add new field to state
  const addInputField = (createFieldObj:  Obj, section: string) => {
     let newFieldObj: CustomerProps;

    switch (section) {
      case "Personal":
        newFieldObj = JSON.parse(JSON.stringify(personalSection))
        newFieldObj.fields.push(createFieldObj)
        setPersonalSection(newFieldObj)
        break;
      case "Address":
        newFieldObj = JSON.parse(JSON.stringify(addressSection))
        newFieldObj.fields.push(createFieldObj)
       setAddressSection(newFieldObj)
        break;
      case "Contacts":
        newFieldObj = JSON.parse(JSON.stringify(contactsSection))
        newFieldObj.fields.push(createFieldObj)
        setContactsSection(newFieldObj)
        break;
    }
  }

  //***** Delete field from state
  const deleteField = (section: string, fieldName: string) => {
    let newFieldObj: CustomerProps

    switch (section) {
      case "Personal":
        newFieldObj = JSON.parse(JSON.stringify(personalSection))
        newFieldObj.fields.map((field, index) => {
          if (field.inputName === fieldName) {
            newFieldObj.fields.splice(index,1)
          }
        })
        setPersonalSection(newFieldObj)
        break;
      case "Address":
        newFieldObj = JSON.parse(JSON.stringify(addressSection))
        newFieldObj.fields.map((field, index) => {
          if (field.inputName === fieldName) {
            newFieldObj.fields.splice(index,1)
          }
        })
        setAddressSection(newFieldObj)
        break;
      case "Contacts":
        newFieldObj = JSON.parse(JSON.stringify(contactsSection))
        newFieldObj.fields.map((field, index) => {
          if (field.inputName === fieldName) {
            newFieldObj.fields.splice(index,1)
          }
        })
        setContactsSection(newFieldObj)
        break;
    }
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

      {personalSection.name ?
          <Personal
              click={(createFieldObj: Obj, section: string)=> addInputField(createFieldObj, section)}
              sectObj={personalSection}
              delete={() => deleteSection(personalSection.name)}
              deleteField={(section, fieldName)=> deleteField(section, fieldName)}
          />
          : null}

      {addressSection.name ?
          <Address
              click={(createFieldObj: Obj, section: string)=> addInputField(createFieldObj, section)}
              sectObj={addressSection}
              delete={() => deleteSection(addressSection.name)}
              deleteField={(section, fieldName)=> deleteField(section, fieldName)}
          />
          : null}

      {contactsSection.name ?
          <Contacts
              click={(createFieldObj: Obj, section: string)=> addInputField(createFieldObj, section)}
              sectObj={contactsSection}
              delete={() => deleteSection(contactsSection.name)}
              deleteField={(section, fieldName)=> deleteField(section, fieldName)}
          />
          : null}

    </div>
  );
}

export default App;
