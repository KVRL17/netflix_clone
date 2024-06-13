import React, { useState, useEffect } from "react";
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchurl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchurl);
                setMovies(request.data.results);
                return request;
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        }
        fetchData();
    }, [fetchurl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            const movieName = movie?.name || movie?.title || movie?.original_name || "";
            if (movieName) {
                movieTrailer(movieName)
                    .then((url) => {
                        if (url) {
                            const urlParams = new URLSearchParams(new URL(url).search);
                            setTrailerUrl(urlParams.get("v"));
                        } else {
                            console.error("Trailer URL not found");
                        }
                    })
                    .catch((error) => console.error("Error fetching trailer:", error));
            } else {
                console.error("Movie name is not available");
            }
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row_posters ${isLargeRow && "row_posterlarge"}`}>
                {movies.map((movie) => (
                    <img
                        className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        onClick={() => handleClick(movie)}
                        alt={movie.name || movie.title || movie.original_name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;