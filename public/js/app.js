class App extends React.Component {

  state = {
    movies: []
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    axios.post('/80smovies', this.state).then(response => this.setState({ movies: response.data, title: "", genre: "", rated: "", imageMain: ""})
    )
  }

  /*
  deleteMovie = (event) => {
    axios.delete('/80smovies/' + event.target.value).then(response => {
      this.setState({
        movies: response.data
      })
    })
  }
  */

  updateMovie = (event) => {
    event.preventDefault()
    event.target.reset()
    const id = event.target.id
    axios.put('/80smovies/' + id, this.state).then(response => {
      this.setState({
        movies: response.data,
        title: "",
        genre: "",
        summary: "",
        rated: "",
        imageMain: "",
        image1: "",
        image2: "",
        image3: ""
      })
    })
  }

  componentDidMount = () => {
    axios.get("/80smovies").then(response => {
      this.setState({
        movies: response.data
      })
    })
  }

  render = () => {
    return (
      <div>

        // <details className="create">
        // <form onSubmit={this.handleSubmit}>
        //   <label htmlFor="name">Name</label>
        //   <input
        //   type='text'
        //   id='name'
        //   onChange={this.handleChange} />
        //   <br />
        //   <label htmlFor="image">Image</label>
        //   <input
        //   type='text'
        //   id='image'
        //   onChange={this.handleChange} />
        //   <br />
        //   <label htmlFor="movie">Movie</label>
        //   <input
        //   type='text'
        //   id='movie'
        //   onChange={this.handleChange} />
        //   <br />
        //   <label htmlFor="price">Price</label>
        //   <input
        //   type='text'
        //   id='price'
        //   onChange={this.handleChange} />
        //   <br />
        //   <input className="myButton" type="submit" value="Create Prop" />
        // </form>
        // </details>

      <ul>

        {this.state.movies.map((movie) => {

          return (
            <li key={movie._id}>
              <span>
                <h2 className="moviesName">{movie.name}</h2>

                <details className='view'>

                  <summary><img className="movieImg" src={movie.imageMain} alt={movie.name} /></summary>
                  <br/>

                  <h3>Title: {movie.title}</h3>
                  <img src="{movie.imageMain}" />
                  <h3>Genre: {movie.genre}</h3>
                  <h3>Rated: {movie.rated}</h3>

                </details>

                // <button className="myButton" value={movie._id} onClick={this.deleteMovie}>Buy Now</button>

                <details>
                  <summary>Edit Here</summary>
                  <form id={movie._id}

                    onSubmit={this.updateMovie}>

                    <label htmlFor="title">Title</label>
                    <br/>
                    <input
                    type="text"
                    id="title"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="imageMain">Image</label>
                    <br/>
                    <input
                    type="text"
                    id="imageMain"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="genre">Genre</label>
                    <br/>
                    <input
                    type="text"
                    id="genre"
                    onChange={this.handleChange} />
                    <br/>

                    <label htmlFor="rated">Rated</label>
                    <br/>
                    <input
                    type="text"
                    id="rated"
                    onChange={this.handleChange} />
                    <br/>

                    <input
                    className="myButton"
                    type="submit"
                    value="Update Movie" />

                  </form>
                </details>

                  </span>
                </li>
              )
            })
          }

        </ul>
      </div>
    )
  }
}



ReactDOM.render(<App></App>, document.querySelector('main'))
