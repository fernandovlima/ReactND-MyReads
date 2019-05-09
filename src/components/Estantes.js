import React, { Fragment } from "react";
import PropTypes from "prop-types";

//componentes
import Estante from "./Estante";

const Estantes = props => {
  const estantes = [
    { id: "currentlyReading", titulo: "Currently Reading" },
    { id: "wantToRead", titulo: "Want to Read" },
    { id: "read", titulo: "Read" }
  ];

  const { listaLivros, atualizaEstante } = props;
  console.log("====================================");
  console.log("Lista dos livros em estantes antes do filter: ", listaLivros);
  console.log("====================================");
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
              atualizaEstante={atualizaEstante}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

Estantes.PropTypes = {
  listaLivros: PropTypes.array.isRequired,
  atualizaEstante: PropTypes.func.isRequired
};

export default Estantes;
