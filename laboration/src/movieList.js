import React, { useState, useRef} from 'react';

export default function MovieList() {
    return (
        <div>
            <label for="title-field">Titel:</label>
            <input type="text" id="title-field" className="form-control"></input>
        </div>
    )
}