import * as React from "react";
import {createRoot} from "react-dom/client";
import {List} from "./components/List";

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    }, {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];

createRoot(
    document.getElementById('root')
).render(
    <List lista={list}/>
)