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
    axios.post('/movies', this.state).then(response => this.setState({ movies: response.data, title: "", genre: "", rated: "", imageMain: ""})
    )
  }


  deleteMovie = (event) => {
    axios.delete('/movies/' + event.target.value).then(response => {
      this.setState({
        movies: response.data
      })
    })
  }


  updateMovie = (event) => {
    event.preventDefault()
    event.target.reset()
    const id = event.target.id
    axios.put('/movies/' + id, this.state).then(response => {
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
    axios.get("/movies").then(response => {
      this.setState({
        movies: response.data
      })
    })
  }

  render = () => {
    return (
      <div>

        <div id="titleBar">
          <h1>80's Movie Emporium</h1>
          <div id="titleBarSub">
          </div>
        </div>

         <details className="create">
         <summary>Create Movie</summary>
         <form onSubmit={this.handleSubmit}>

         <label htmlFor="title">Title</label>
          <input
          type='text'
          id='title'
          onChange={this.handleChange} />
          <br />

          <label htmlFor="imageMain">Image</label>
          <input
          type='text'
          id='imageMain'
          onChange={this.handleChange} />
          <br />

          <label htmlFor="genre">Genre</label>
          <input
          type='text'
          id='genre'
          onChange={this.handleChange} />
          <br />

          <label htmlFor="rated">Rated</label>
          <input
          type='text'
          id='rated'
          onChange={this.handleChange} />
          <br />

          <input className="myButton" type="submit" value="Add Movie" />
        </form>
        </details>

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
                  <img src={movie.image1} />
                  <img src={movie.image2} />
                  <img src={movie.image3} />
                  <h4>Genre: {movie.genre}</h4>
                  <h4>Rated: {movie.rated}</h4>
                  <h4>Summery: {movie.summary}</h4>

                </details>

                <button className="myButton" value={movie._id} onClick={this.deleteMovie}>Remove Movie</button>

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
