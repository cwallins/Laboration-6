import React from "react";
import StarIcon from "./assets/star.png";

export default function Movies({item, id, onDelete}) {

    function Rating() {
        return (
            <div style={{display:"flex", flex:1, justifyContent: 'flex-end'}}>
                {
                    Array.apply(null, Array(parseInt(item.rate))).map((i, index) => (
                        <img key={index} src={StarIcon} height="25px"/>
                    ))
                }
            </div>
        )
    }

    return (
        <li className="list-group-item" style={{display: "flex", alignItems: "space-between"}}>
            { item.title}
            <Rating/>
            <button onClick={() => onDelete(id)} className="btn btn-sm btn-danger float-end">X</button>
        </li>
    );
}