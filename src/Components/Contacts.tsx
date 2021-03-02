import React from "react";
interface Props {
    name: string;
    onClick?: () => void;
    delete: ()=> void;

}
const Contacts: React.FC<Props> =(props) => {
    return(
        <div key={props.name } className="form-group border rounded bg-light">
            <div className="form-group d-flex">
                <h2>{props.name}</h2>
                <button type="button" className="btn btn-sm btn-danger m-2" onClick={props.delete}>X</button>
            </div>
        </div>
    )
}

export default Contacts;