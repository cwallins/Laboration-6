import React from "react";

export default function Movies(props) {
    return (
        <li className="list-group-item">
            { props.item.title}
        </li>
    );
}