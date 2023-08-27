import React from 'react';
import CharacterCounter from './Zahler'

function CommentSection(){
    return(
        <form className="form-comment" action="/action_page.php">
          <fieldset className="comment-field">
            <legend>Sprich Dich aus:</legend>
            <div className="form-comment-select">
              <label htmlFor="kategorie">Bewertung:</label>
              <select id="kategorie" name="kategorie">
                <option defaultValue="5 Steme">5 Sterne</option>
                <option value="4 Steme">4 Sterne</option>
                <option value="3 Steme">3 Sterne</option>
                <option value="2 Steme">2 Sterne</option>
                <option value="1 Steme">1 Stern</option>
              </select>
            </div>
            <div className="form-comment-description">
              <div className="">
                <label htmlFor="beschreibung_comment">Kommentar:</label>
              </div>
              <div className="form-comment-description-textarea">
                <span id="character-count">
                  <CharacterCounter />
                </span>
              </div>
            </div>
            <div className="form-action-buttons">
              <button type="submit">Speichern</button>
            </div>
          </fieldset>
        </form>
    );
}

export default CommentSection;