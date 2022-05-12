import React, { useState, useRef} from "react";
import OrderByAlphaBtn from "./OrderByAlphaBtn";
import OrderByGradeBtn from "./OrderByGradeBtn";
import App from "./App";

export default function Movies() {
    return (
        <div>
            <h4>Filmer</h4>
            <OrderByAlphaBtn/> <OrderByGradeBtn/>
            <ul id="movies">

            </ul>
        </div>
    );
}