import React, { Component } from 'react';

class Table extends Component {
    render() { 
        const {items} = this.props
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <th>{index}</th>
                            <td>{item.Asset}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Table;