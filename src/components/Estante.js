import React from "react";
import PropTypes from "prop-types";

// componentes
import Livro from "./Livro";

const Estante = props => {
  const { titulo, listaFiltrada, atualizaEstante } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{titulo}</h2>
      <div className="bookshelf-books">
        {listaFiltrada.length > 0 ? (
          <ol className="books-grid">
            {listaFiltrada.map(livro => (
              <li key={livro.id}>
                <Livro livro={livro} atualizaEstante={atualizaEstante} />
              </li>
            ))}

            <li />
          </ol>
        ) : (
          <ol>prateleira vazia</ol>
        )}
      </div>
    </div>
  );
};

Estante.propTypes = {
  atualizaEstante: PropTypes.func.isRequired
};
export default Estante;
