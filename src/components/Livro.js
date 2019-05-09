import React, { Component } from "react";
import PropTypes from "prop-types";

// componentes
import SelecionaStatus from "./SelecionaStatus";

// imagem de capa quando não estiver disponível
import capa from "../assets/sem_capa.jpg";

class Livro extends Component {
  //state
  state = {
    estante: this.props.livro.shelf
  };

  render() {
    //props
    const { livro, atualizaEstante } = this.props;
    const { title, authors } = livro;

    //se o livro nao tiver imagem utiliza a imagem local padrao para livros sem capa
    const imagemLivro = () => {
      if (livro.imageLinks === undefined) {
        return capa;
      }
      return livro.imageLinks.thumbnail;
    };

    //handle o evento do componente selecionaStatus para atualizar o livro
    const handleSelect = e => {
      livro.shelf = e;
      atualizaEstante(livro);
      this.setState({
        estante: e
      });
    };

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${imagemLivro()})`
            }}
          />
          <SelecionaStatus
            estante={this.state.estante}
            handleSelect={handleSelect}
          />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors &&
            authors.map((nome, index) => <div key={index}>{nome}</div>)}
        </div>
      </div>
    );
  }
}

Livro.propTypes = {
  livro: PropTypes.object.isRequired
};

export default Livro;
