import React, { Component } from 'react';
import '../../../styles/styles.css';
import WineryTerm from '../WineryTerm/wineryterm';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

class Wineries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 9,
        };
    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.wineries.length / this.state.size);
        const wineries = this.getWineriesPage(offset, nextPageOffset);

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
                            <tbody>{wineries}</tbody>
                        </table>
                    </div>

                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={'btn btn-block btn-dark'} to={'/wineries/add'}>
                                    Add new Winery
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactPaginate
                    previousLabel={<span className={`page-link ${this.state.page === 0 ? 'disabled' : ''}`}>Previous</span>}
                    nextLabel={<span className={`page-link ${this.state.page === pageCount - 1 ? 'disabled' : ''}`}>Next</span>}
                    breakLabel={<span className="page-link">...</span>}
                    breakClassName={'break-me'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    activeClassName={'active'}
                    previousClassName={`page-item ${this.state.page === 0 ? 'disabled' : ''}`}
                    nextClassName={`page-item ${this.state.page === pageCount - 1 ? 'disabled' : ''}`}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    disableInitialCallback={true}
                />



            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected,
        });
    };

    getWineriesPage = (offset, nextPageOffset) => {
        return this.props.wineries
            .map((term, index) => (
                <WineryTerm key={index} term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit} />
            ))
            .filter((winery, index) => {
                return index >= offset && index < nextPageOffset;
            });
    };
}

export default Wineries;
