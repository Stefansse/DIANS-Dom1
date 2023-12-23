import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css'



const header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-danger">
                <a className="navbar-brand" href="/wineries">Wineries in North Macedonia</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link white-link" to={"/wineries"}>Wineries</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link white-link" to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}


export default header;
