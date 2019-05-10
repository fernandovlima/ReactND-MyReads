import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

//componentes
import Livro from "./Livro";

class Busca extends Component {
  state = {
    nomeLivro: "",
    listaResultado: [],
    carregando: false
  };

  buscaLivros = () => {
    BooksAPI.search(this.nomeLivro).then(resultado =>
      this.setState(() => ({
        listaResultado: resultado
      }))
    );
  };

  handleInputChange = e => {
    this.setState({
      nomeLivro: e.target.value
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={this.state.nomeLivro}
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <div className="bookshelf-books">
            {this.state.listaResultado.length > 0 ? (
              <ol className="books-grid">
                {this.state.listaResultado.map(livro => (
                  <li key={livro.id}>
                    <Livro
                      livro={livro}
                      atualizaEstante={this.atualizaEstante}
                    />
                  </li>
                ))}

                <li />
              </ol>
            ) : (
              <ol>prateleira vazia</ol>
            )}
          </div>
        </div>
      </div>
    );
  }
}
Busca.PropTypes = {
  nomeLivro: PropTypes.string.isRequired,
  listaResultado: PropTypes.array.isRequired,
  carregando: PropTypes.bool.isRequired
};
export default Busca;
