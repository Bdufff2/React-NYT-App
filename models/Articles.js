const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    _id: { 
        type: Schema.Types.ObjectId, 
        required: true 
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;