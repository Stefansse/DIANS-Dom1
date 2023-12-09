import './App.css';
import React, {Component} from "react";
import WineryService from "../../repository/WineryRepository";
import Wineries from "../Wineries/WineryList/wineries";
import Header from "../Header/header";
import WineryAdd from '../Wineries/WineryAdd/WineriAdd';
import WineryEdit from "../Wineries/WineryEdit/WineriEdit";

import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Contact from "../Contact/contact";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wineries: [],
            selectedWinery: {}
        }
    }


    render() {
        return (
            <main>
                <Header/>
                <div className={"container"}>
                    <Routes>

                        <Route
                            exact
                            path={"/wineries/add"}
                            element={<WineryAdd onAddWinery={this.addWinery}/>}
                        />
                        <Route
                            exact
                            path="/wineries"
                            element={<Wineries wineries={this.state.wineries} onDelete={this.deleteWinery} onEdit={this.getWinery}/>}
                        />

                        <Route
                            exact
                            path="/wineries/edit/:id"
                            element={<WineryEdit onEditWinery={this.editWinery} winery={this.state.selectedWinery}/>}
                        />
                        <Route
                            exact
                            path="/contact"
                            element={<Contact />}
                        />

                    </Routes>
                </div>
            </main>
        );
    }

    loadWineries = () => {
        WineryService.fetchWineries()
            .then((data) => {
                this.setState({
                    wineries: data.data
                })
            })
    }

    deleteWinery = (id) => {
        WineryService.deleteWinery(id)
            .then(() => {
                this.loadWineries();
            });
    }


    addWinery = (locationName, coordinates, latitude, longitude, registrationNumber, name) => {
        WineryService.addWinery(locationName, coordinates, latitude, longitude, registrationNumber, name)
            .then(() => {
                this.loadWineries();
            });
    }

    getWinery = (id) => {
        WineryService.getWinery(id)
            .then((data)=> {
                this.setState({
                    selectedWinery:data.data
                })
            })
    }

    editWinery = (id, locationName, coordinates, latitude, longitude, registrationNumber, name) => {
        WineryService.editWinery(id, locationName, coordinates, latitude, longitude, registrationNumber, name)
            .then(()=> {
                this.loadWineries()
            })
    }


    componentDidMount() {
        this.loadWineries();
    }
}

export default App;
