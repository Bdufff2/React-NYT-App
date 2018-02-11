const axios = require('axios');
const db = require('../models');

// Defining api methods
module.exports = {
    findAll: function (req, res) {
        const params = Object.assign(
            { api_key= "ca0f6afae07c412198618d588e6a00f9" },
            req.query
        );
        axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", 
        { params })
        .then(response => {
            db.Article.find().then(dbArticles => 
                response.data.docs.filter(article => 
                    dbArticles.every(dbArticle => 
                        dbArticle => dbArticle._id.toString() !== article._id
                    )
                )
            ).then(articles => res.json(articles)).catch(err => res.status(418).json(err));
        });
    }
}
