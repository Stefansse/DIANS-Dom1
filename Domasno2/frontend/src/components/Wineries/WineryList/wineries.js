import React from 'react';
import '../../../styles/styles.css';
import WineryTerm from "../WineryTerm/wineryterm";
import {Link} from "react-router-dom";

const Wineries = (props) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="row">
                    <table className="table table-bordered table-hover bg-dark text-white">
                        <thead>
                        <tr>
                            <th scope="col">Location</th>
                            <th scope="col">Coordinates</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">Registration Number</th>
                            <th scope="col">Winery Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.wineries.map((term) => (
                            <WineryTerm  term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/wineries/add"}>Add new Winery</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Wineries;
