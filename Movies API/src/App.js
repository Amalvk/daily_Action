
import React, {useState, useCallback, useEffect} from 'react';
import Axios from 'axios';
import MoviesList from './MoviesList';
import GenresCollection from './genres.js'
import Navbar from './NavBar'
import MovieList from './movie_list';
// import componentDidMount from MovieSuh.js


const accessToken= 'Wookie2019';
const apiUrl = 'https://wookie.codesubmit.io/movies';

const authAxios = Axios.create({
  baseURL : apiUrl,
  headers : {
    Authorization : `Bearer ${accessToken}`
  }
});
// var count =0
function App() {
  // const [count,setcount]=useState(0)
  const [movies, setMovies] = useState([]);
  const [requestError, setRequestError] = useState();
  const [loading, setLoading] = useState(true);


  const fetchData = useCallback(async () => {
    try{
      const result = await authAxios.get();
      console.log(result)
      setMovies(result.data.movies);
      setLoading(false)
    }
    catch(err) {
      setRequestError(err.message);
    }
  });

  useEffect(() => {
		fetchData();
	},[])

  return(
    <>
    <Navbar/>
    {
      loading ? <p>
        loading...
      </p>:<MovieList movies={movies}/>
    }
      

    {/* <h1>{count}</h1>
    <button onClick={()=>
      {
       let newcount=count+1
        setcount(newcount); console.log(count)} }> +1 </button> */}

      {/* <componentDidMount />
      <MoviesList movies={movies} />
      <GenresCollection movies={ movies }/> */}
    </>
  )
}

export default App;