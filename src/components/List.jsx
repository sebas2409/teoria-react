import * as React from "react";
import {Search} from "./Search";

export function List(props){
    const handleSearch=(event)=>(
        console.log(event.target.value)
    )
    return(
        <div>
            <h1>My Hacker Stories</h1>
            <Search onSearch={handleSearch}/>
            <ul>
                {props.lista.map((item)=>(
                    <Item key={item.objectID} item={item} />
                ))}
            </ul>
        </div>
    );
}

const Item=(props)=>(
    <li>
        <span>
            <a href={props.item.url}>{props.item.title}</a>
        </span>
        <span> {props.item.author}</span>
        <span> {props.item.points}</span>
    </li>
)