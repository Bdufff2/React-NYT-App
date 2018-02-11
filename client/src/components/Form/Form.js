import React from "react";

const Form = props => (

    <div className="form-group">
        <form>
            <h4>Topic</h4>
            <input
                type="text"
                name="form-topic"
                // onChange={}
                required
            />
            <h4>Start Year</h4>
            <input
                type="text"
                name="form-start"
                // onChange={}
                required
            />
            <h4>End Year</h4>
            <input
                type="text"
                name="form-end"
                // onChange={}
                required
            />
            <br/><br/>

            <input
                type="submit"
                id="search-btn"
                value="Search"
                // onclick={}
            />
        </form>
    </div>
);

export default Form;