import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
//componentes
import Estantes from "./components/Estantes";
import Busca from "./components/Busca";

class BooksApp extends React.Component {
  state = {
    listaLivros: [],
    showSearchPage: false
  };

  //carrega lista de livros da API
  loadList() {
    BooksAPI.getAll().then(listaLivros =>
      this.setState(() => ({
        listaLivros
      }))
    );
  }

  //carrega lista de livros antes do render do componente
  componentDidMount() {
    this.loadList();
  }

  // atualiza o livro para a estante correta após mudar status
  atualizaEstante = livroAtualizado => {
    BooksAPI.update(livroAtualizado, livroAtualizado.shelf).then(() => {
      this.loadList();
    });
  };

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route
          className=""
          exact
          path="/busca"
          render={({ history }) => (
            <Busca
              listaLivros={this.state.listaLivros}
              atualizaEstante={livro => {
                this.atualizaEstante(livro);
                history.push("/");
              }}
            />
          )}
        />
        <div className="list-books">
          <Route
            exact
            path="/"
            render={() => (
              <Estantes
                listaLivros={this.state.listaLivros}
                atualizaEstante={this.atualizaEstante}
              />
            )}
          />
          <div className="open-search">
            <Link className="open-search-link" to="/busca">
              search a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
