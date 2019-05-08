import React, { Component } from "react";
import PropTypes from "prop-types";

// componentes
import Livro from "./Livro";

const Estante = props => {
  console.log("Lista de Livros: ", props);
  const { titulo, listaFiltrada, atualizaEstante } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titulo}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {listaFiltrada.map(livro => (
            <li key={livro.id}>
              <Livro livro={livro} atualizaEstante={atualizaEstante} />
            </li>
          ))}

          <li />
        </ol>
      </div>
    </div>
  );
};

export default Estante;
