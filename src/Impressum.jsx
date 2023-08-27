import React from "react";

function Impressum(){
    return(
        /*<main>
        <div className="card impressum-box ">
            <ul>
                <li>Name: Isabelle Zibner </li>
                <li>Studiengang: E-Commerce </li>
                <li>Hochschule: Hochschule Ruhr West</li>
            </ul>
        </div>
        <div className="impressum-box">
            <ul>
                <li>Name: Esra Tuerker</li>
                <li>Studiengang:E-Commerce </li>
                <li>Hochschule: Hochschule Ruhrwest</li>
            </ul>
        </div>
    </main>*/
    <main>
        <div className="card custom-card ">
          <div className="card-body">
            <h5 className="card-title">
              <a href="mailto:author@example.com" className="float-right text-decoration-none text-dark">Isabelle Zibner</a>
            </h5>
            <p className="card-text">Studiengang:E-Commerce<br/>Hochschule: Hochschule RuhrWest</p>
          </div>
        </div>
        <div className="card custom-card ">
          <div className="card-body">
            <h5 className="card-title">
              <a href="mailto:author@example.com" className="float-right text-decoration-none text-dark">Esra Tuerker</a>
            </h5>
            <p className="card-text">Studiengang:E-Commerce<br/>Hochschule: Hochschule Ruhrwest</p>
          </div>
        </div>
    </main>
    );
}

export default Impressum;