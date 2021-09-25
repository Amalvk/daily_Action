import MovieSep from './MovieGen.js'

const GenresCollection = (props) => {
  var genrest = [];
  props.movies.map((movie) => genrest.push(movie.genres));

  genrest = [].concat(...genrest);
  
  genrest = genrest.filter((item, pos) => genrest.indexOf(item) === pos);
  

  return (
    


          <div>
          <MovieSep movies={props.movies} test='Hello' />
    </div>
  )
}

export default GenresCollection;
