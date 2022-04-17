import * as React from "react";
import {Search} from "./Search";

export function List(props) {
    const [searchTerm, setSearchTerm] = React.useState('React'); // valor inicial del input al recargar
    const handleSearch = (event) => (
        setSearchTerm(event.target.value)
    )
    const searchedStories = props.lista.filter((list) => {
        return list.title.includes(searchTerm)
    })
    return (
        <div>
            <h1>My Hacker Stories</h1>
            <Search search={searchTerm} onSearch={handleSearch}/>
            <Item lista={searchedStories}/>
        </div>
    );
}

const Item = (props) => (
    <ul>
        {props.lista.map((item) => (
            <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
                <span>{item.author}</span>
                <span>{item.points}</span>
            </li>))}
    </ul>
)