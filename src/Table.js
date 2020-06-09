import React, { Component } from 'react'

// A simple component
const TableHeader = () => {
    return (
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Job</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">action</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    });
    return <tbody>{rows}</tbody>
}

const Table = props => {
    const { characterData, removeCharacter } = props;

    return (
        <table className="table">
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

// this is a class component
// class Table extends Component {
//     render(){
//         const { characterData } = this.props;
//         return (
//             <table className="table">
//                 <TableHeader />
//                 <TableBody characterData={characterData} />
//             </table>
//         )
//     }
// }

export default Table;