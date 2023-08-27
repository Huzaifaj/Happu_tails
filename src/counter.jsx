import React from "react";
import { useState } from "react";

const CharacterCounter = () => {
    const [currentCount, setCurrentCount] = useState(0);
    const maxCharacters = 300;
  
    const handleInput = (event) => {
      const { value } = event.target;
      setCurrentCount(value.length);
    };
  
    return (
      <div>
        <textarea id="beschreibung_comment" name="beschreibung_comment" rows="20" cols="80"
            maxLength="300" placeholder="Schreib einen Kommentar" onInput={handleInput} />
        <span id="character-count">
          {currentCount}/{maxCharacters}
        </span>
      </div>
    );
  };
  
  export default CharacterCounter;
  