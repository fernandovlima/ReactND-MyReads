import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

//componentes
import Livro from "./Livro";

class Busca extends Component {
  state = {
    termoBusca: "",
    listaResultado: []
  };

  buscaLivros = () => {
    BooksAPI.search(this.state.termoBusca).then(resultado =>
      this.setState(() => ({
        listaResultado: resultado
      }))
    );
  };

  handleInputChange = e => {
    this.setState({
      termoBusca: e.target.value
    });
  };

  handler = () =>
    setTimeout(() => {
      const { termoBusca } = this.state;
      if (termoBusca.length > 3) {
        this.buscaLivros(termoBusca);
        //this.setState(() => ({ carregando: true }));
      } else if (termoBusca.length === 0) {
        this.setState(() => ({ listaResultado: [] }));
      }
    }, 800);

  componentWillUnmount() {
    clearTimeout(this.handler);
  }

  render() {
    this.handler();
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
                      atualizaEstante={this.props.atualizaEstante}
                    />
                  </li>
                ))}

                <li />
              </ol>
            ) : (
              <ol>
                nenhum livro a exibir, faça sua busca digitando na barra acima
              </ol>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Busca;
