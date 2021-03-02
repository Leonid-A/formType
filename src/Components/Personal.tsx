import React, {useState} from "react";

interface Props {
    name: string;
    onClick?: () => void;
    delete: () => void;
}

const Personal: React.FC<Props> = (props) => {
    const [createFieldObj, setCreateFieldObj] = useState({})

    const setCreateField = (sectionName, event) => {
        // const newFieldObj = JSON.parse(JSON.stringify(createFieldObj))

        if (newFieldObj[sectionName]) {
            newFieldObj[sectionName][event.target.name] = event.target.value
        } else {
            newFieldObj[sectionName] = {
                [event.target.name]: event.target.value
            }
        }

        setCreateFieldObj(newFieldObj)
    }

    return(
        <div key={props.name } className="form-group border rounded bg-light">
            <div className="form-group d-flex">
                <h2>{props.name}</h2>
                <button type="button" className="btn btn-sm btn-danger m-2" onClick={props.delete} >X</button>
            </div>
            <div>
                <select className= "ml-2" name="inputName" onChange={(event) => {setCreateField(section.name, event)}}>
                    <option> </option>
                    <option>FirstName</option>
                    <option>LastName</option>
                    <option>BirthDay</option>
                    <option>Age</option>
                </select>
                <select className= "ml-2" name="inputType" onChange={(event) => {setCreateField(section.name, event)}}>
                    <option> </option>
                    <option>text</option>
                    <option>date</option>
                    <option>number</option>
                </select>
                <button type="button" className="btn btn-secondary ml-2" onClick={() => addInputField(section.name)}>Add</button>
            </div>

        </div>
        )
}

export default Personal;