import React, { Component } from "react";
import PropTypes from "prop-types";

// componentes
import SelecionaStatus from "./SelecionaStatus";

class Livro extends Component {
  render() {
    const { livro } = this.props;
    const { title, authors } = livro;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${livro.imageLinks.thumbnail})`
            }}
          />
          <SelecionaStatus />
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
