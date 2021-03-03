import React from "react";

interface Props {
    sectObj: {name: string, fields:{}[]};
    click: ({}: Obj, section:string ) => void ;
    delete: () => void ;
    deleteField: (section: string, fieldName: string ) => void;
}
interface Obj {
    [key : string]: string;
}

const Address: React.FC<Props> = (props) => {
    let createFieldObj: Obj ={inputType:"", inputName:""};
    const section = props.sectObj.name;

    //***** Take new Field name and type
    const setCreateField = (event: {target:{name:string,value:string}}) => {
        createFieldObj[event.target.name] = event.target.value
    }

    return(
        <div key={props.sectObj.name} className="form-group border rounded bg-light">
            <div className="form-group d-flex">
                <h2>{props.sectObj.name}</h2>
                <button type="button" className="btn btn-sm btn-danger m-2" onClick={props.delete} >X</button>
            </div>
            <div>
                <select className= "ml-2" name="inputName" onChange={(event) => {setCreateField(event)}}>
                    <option> </option>
                    <option>Country</option>
                    <option>City</option>
                    <option>Street</option>
                    <option>ZipCode</option>
                </select>
                <select className= "ml-2" name="inputType" onChange={(event) => {setCreateField(event)}}>
                    <option> </option>
                    <option>text</option>
                    <option>number</option>
                </select>
                <button type="button" className="btn btn-secondary ml-2" onClick={() => props.click(createFieldObj, section)}>Add</button>
            </div>
            {props.sectObj.fields.map((field: Obj)=> {
                return (
                    <div className="form-group d-flex" key={field.inputName}>
                        <label className= "m-2" htmlFor={field.inputName}>{field.inputName}</label>
                        <input type={field.inputType} className="form-control col-md-6 m-2" id={field.inputName} />
                        <button type="button" className="btn btn-danger m-2" onClick={() => props.deleteField(section,field.inputName)}>X</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Address;