import React, { useState, useRef} from "react";
import App from "./App";

export default function AddMovieBtn() {
    
    return (
        <div>
            <input type="submit" class="btn btn-success mt-3" value="Spara film"/>
        </div>
    );
}