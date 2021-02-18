import React from "react";
import { Link } from "react-router-dom";

class TvMaze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
      genre: undefined,
      summary: undefined,
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(e) {
    e.preventDefault();
    const input = e.target.elements.movie.value.trim();
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=${input}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => {
          return {
            image: data.image.original,
            genre: data.genres,
            summary: data.summary,
          };
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Search Movie</h1>
        <form onSubmit={this.handleForm}>
          <input type="text" name="movie" placeholder="Input Movie Name" />
          <button>Search</button>
        </form>
        <p>
          <img src={this.state.image} />
        </p>
        <b>{this.state.genre ? `Genre: ${this.state.genre}` : undefined}</b>
        <p>
          <b>
            {this.state.summary ? `Summary: ${this.state.summary}` : undefined}
          </b>
        </p>
        <p>
          <Link to="/">Back</Link>
        </p>
      </div>
    );
  }
}

export default TvMaze;
