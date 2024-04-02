import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import {GoogleGenerativeAI} from "@google/generative-ai";
//const { GoogleGenerativeAI } = require("@google/generative-ai");


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);


  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    return json.results;
  };



// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// ...

// For text-only input, use the gemini-pro model
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// ...

async function run() {

  
  const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  searchText.current.value +
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
  const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response;
    const text = response.text();
    const gptMovies = text.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
          addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
        );
    //console.log(text);
  };
  
  
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={run}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
