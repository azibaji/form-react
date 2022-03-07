import React, { Component } from 'react';

class Table extends Component {
    render() { 
        const {items, indexes} = this.props
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    {indexes.map((index, i) => (
                        <th scope="col" key={i}>
                            {index.title}
                        </th>
                    ))}


                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <th>{index}</th>
                            {indexes.map((index, i) =>(
                                <td key={i}>
                                    {index.index === 'IsActive' && item[index.index] && <i className="fa fa-check" aria-hidden="true"></i> }
                                    {index.index === 'IsActive' && !item[index.index] && <i className="fa fa-times" aria-hidden="true"></i> }
                                    {item[index.index]}

                                </td>
                            ))}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Table;