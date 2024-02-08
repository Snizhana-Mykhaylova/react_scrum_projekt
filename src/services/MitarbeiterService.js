import axios from "axios";

const basicUrl = 'https://api.themoviedb.org/3/';
const key = '8e2d6c50ec8673fce37d0988f16fea97';
const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;




class MitarbeiterService{


    getMitarbeiter(){
        return axios.get(trendingMovieUrl );
    }

}

export default new MitarbeiterService();