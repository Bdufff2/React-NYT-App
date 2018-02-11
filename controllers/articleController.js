const db = require("../models");

module.exports = {
    // Create initial find requests to pull data from db
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
    },

    // Create/Update/Delete article functions
    create: function(req, res) {
        const article = {
            _id: req.body._id,
            // title: req.body.
            // url: req.body.
        };
        db.Article
            .create(article)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(418).json(err));
    },
    update: function(req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(418).json(err));
    },
    remove: function(req, res) {
        db.Article
            .findById({ _id: req.params.id })
            .then(dbArticle => dbArticle.remove())
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(418).json(err));
    }
};