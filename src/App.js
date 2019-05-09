import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

//componentes
import Estantes from "./components/Estantes";

class BooksApp extends React.Component {
  state = {
    listaLivros: [],
    showSearchPage: false
  };

  //carrega lista de livros
  componentDidMount() {
    BooksAPI.getAll().then(listaLivros =>
      this.setState(() => ({
        listaLivros
      }))
    );
  }

  render() {
    // atualiza o livro para a estante correta após mudar status
    const atualizaEstante = livroAtualizado => {
      BooksAPI.update(livroAtualizado, livroAtualizado.shelf).then(
        livroAtualizado =>
          this.setState(estadoAntigo => ({
            listaLivros: { ...estadoAntigo, livroAtualizado }
          }))
      );
    };
    console.log("====================================");
    console.log("lista de livros apos atualizar no APP");
    console.log("====================================");

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Estantes
              listaLivros={this.state.listaLivros}
              atualizaEstante={atualizaEstante}
            />

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
