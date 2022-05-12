import React, { useState, useRef } from 'react';

export default function MovieForm() {
    return (
        <div>
            <label for="title-field">Titel:</label>
            <input type="text" id="title-field" className="form-control"></input>
            <lablel for="rating-field">Betyg:</lablel>

            <select type="text" id="rating-field" class="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <hr></hr>

        </div>
    )
}