import React from "react";
import {Link} from "react-router-dom";

const wineryterm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.locationName}</td>
            <td scope={"col"}>{props.term.coordinates}</td>
            <td scope={"col"}>{props.term.latitude}</td>
            <td scope={"col"}>{props.term.longitude}</td>
            <td scope={"col"}>{props.term.registrationNumber}</td>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"} onClick={()=>props.onDelete(props.term.id)}>
                    Delete</a>
                <Link className={"btn btn-info ml-2"}
                    onClick={()=>props.onEdit(props.term.id)}
                    to={`/wineries/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default wineryterm;


// <tr key={term.id}>
//     <td>{term.locationName}</td>
// <td>{term.coordinates}</td>
// <td>{term.latitude}</td>
// <td>{term.longitude}</td>
// <td>{term.registrationNumber}</td>
// <td>{term.name}</td>
// </tr>