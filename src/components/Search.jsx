import * as React from "react";

export const Search=(props)=>{
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" value={props.search} type="text" onChange={props.onSearch}/>
        </div>
    )
}