import React from "react";
import PropTypes from "prop-types";
import App from "./App";

function Movie({id, year, title, summary, poster}) {
    return <h4>{title}</h4>;
}

Movie.PropTypes= {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.summary.isRequired,
    poster: PropTypes.string.isRequired,
};

export default App;