import React from "react";
interface Obj {
    [key : string]: string;
}

interface Props {
    sectObj: {name: string, fields:{}[]};
    click: ({}: Obj, section:string ) => void ;
    delete: () => void ;
    deleteField: (section: string, fieldName: string ) => void;
}

const Contacts: React.FC<Props> =(props) => {
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
            <table className="mb-2 border">
                <thead>
                <tr>
                    <th className="border p-1">
                        <select className= "ml-2" name="inputName" onChange={(event) => {setCreateField(event)}}>
                            <option> </option>
                            <option>E-Mail</option>
                            <option>Phone</option>
                            <option>WebPage</option>
                            <option>LinkedIn</option>

                        </select>
                    </th>
                    <th className="border p-1">
                        <select className= "ml-4" name="inputType" onChange={(event) => {setCreateField(event)}}>
                            <option> </option>
                            <option>text</option>
                            <option>number</option>
                            <option>link</option>
                        </select>
                    </th>
                    <th className="border p-1">
                        <button type="button" className="btn btn-secondary ml-2" onClick={() => props.click(createFieldObj, section)}>Add</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {props.sectObj.fields.map((field: Obj)=> {
                    return (
                        <tr key={field.inputName}>
                            <td className="border p-1">
                                <label className= "m-2" htmlFor={field.inputName}>{field.inputName}</label>
                            </td>
                            <td className="border p-1">
                                <input type={field.inputType} className="form-control m-2" id={field.inputName} />
                            </td>
                            <td className="border p-1">
                                <button type="button" className="btn btn-danger m-2" onClick={() => props.deleteField(section,field.inputName)}>X</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts;