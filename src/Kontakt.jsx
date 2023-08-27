import React from "react";

function Kontakt() {
    return (
        <main>
            <form className="form-inline" action="/action_page.php">
                <div className="form-fields">
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="vornamen">Vornamen</label>
                        </div>
                        <div className="form-input col-sm-9">
                            <input type="text" className="form-control" pattern="[a-zA-Z'-'\s]{2,40}" id="vornamen" placeholder="Vornamen" name="vornamen" />
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="nachnamen">Nachnamen</label>
                        </div>
                        <div  className="form-input col-sm-9">
                            <input type="text" className="form-control" pattern="[a-zA-Z'-'\s]{2,40}" id="nachnamen" placeholder="Nachnamen" name="nachnamen" />
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="email">Email <span>*</span></label>
                        </div>
                        <div  className="form-input col-sm-9">
                            <input required className="form-control" type="email" id="email" placeholder="Enter email" name="email" />
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="artikelnummer">Artikelnummer</label>
                        </div>
                        <div  className="form-input col-sm-9">
                            <input type="text" className="form-control" id="artikelnummer" pattern="^(?:\d{8}|[a-z]{3}|[a-z]{3}p)$" placeholder="Artikelnummer" name="artikelnummer" />
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="betreff">Betreff <span>*</span></label>
                        </div>
                        <div className="form-input col-sm-9">
                            <input required className="form-control" type="text" id="betreff" placeholder="Betreff" name="betreff" />
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label className="form-label" htmlFor="kategorie">Kategorie</label>
                        </div>
                        <div  className="form-input col-sm-9">
                            <select className="form-control" id="kategorie" name="kategorie">
                                <option value="Allgemein" /*selected*/ defaultValue>Allgemein</option>
                                <option value="Second">Second</option>
                                <option value="Third">Third</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group row">
                        <div className="col-sm-3 col-form-label">
                            <label htmlFor="beschreibung">Beschreibung <span>*</span></label>
                        </div>
                        <div  className="form-input col-sm-9">
                            <textarea className="form-control" id="beschreibung" name="beschreibung" rows="15" cols="40" maxLength="400" placeholder="Beschreibung"></textarea>
                        </div>
                    </div>
                        <div className="form-label font-style-italic">
                            <br></br>
                            <p><span>*</span> Pflichtfelder </p>
                            <br></br>
                        </div>
                    
                </div>
                <div className="form-action-buttons form-action-buttons-contact">
                    <button className="mx-1 btn btn-danger" type="reset">Formular löschen</button>
                    <button className="btn btn-primary" type="submit">Senden</button>
                </div>
            </form>
        </main>
    );
}

export default Kontakt;