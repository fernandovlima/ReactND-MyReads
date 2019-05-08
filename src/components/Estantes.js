import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

//componentes
import Estante from "./Estante";

const Estantes = props => {
  const estantes = [
    { id: "currentlyReading", titulo: "Currently Reading" },
    { id: "wantToRead", titulo: "Want to Read" },
    { id: "read", titulo: "Read" }
  ];

  const { listaLivros } = props;
  return (
    <Fragment>
      {estantes.map(estante => (
        <div key={estantes.id} className="list-books-content">
          <div>
            <Estante
              titulo={estante.titulo}
              listaFiltrada={listaLivros.filter(
                livro => livro.shelf === estante.id
              )}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Estantes;