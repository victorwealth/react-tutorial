import React, { Component } from 'react'

// A simple component
const TableHeader = () => {
    return (
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
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
                <td>{row.handle}</td>
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