const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find(req.query)
            .sort({date:-1})
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(418).json(err));
    },
    findById: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(418).json(err));
    }
};