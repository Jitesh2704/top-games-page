import axios from "axios";
const key="f9f1c85c719e4b4691dde3fd267d8e06"
const axioCreate= axios.create({
    baseURL: "https://api.rawg.io/api",
    // params: {
    //   key: "f9f1c85c719e4b4691dde3fd267d8e06",
    // },
  });
  
const getPopularGame=axioCreate.get('/games?key='+key)
const getMovieDetails=(id)=>axioCreate.get('/games/'+id+'/movies')
const getGameListByGenreId=(id)=>axioCreate.get('/games?key='+key+'&genres='+id)
export default{
    getPopularGame,
    getMovieDetails,
    getGameListByGenreId
}