import { React, useState } from 'react'
//import data from "./ListData.json"

function SearchList(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default SearchList