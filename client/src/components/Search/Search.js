import React from "react";

const Search = props => (
    <div className="container">
        <div className="header">
            <h3><strong>Search</strong></h3>
        </div>
        <div className="search-box">
            <form>
                <h4>Topic</h4>
                <input type="text" name="topic" />
                <h4>Start Year</h4>
                <input type="text" name="start year" />
                <h4>End Year</h4>
                <input type="text" name="end year" />
                <br /><br />
                <input type="submit" value="Search" />
            </form>
        </div>

    </div>
);

export default Search;