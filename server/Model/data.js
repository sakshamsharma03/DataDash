import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    "end_year": {String,defalt:''},
        "intensity": Number,
        "sector": String,
        "topic": String,
        "insight": String,
        "url": String,
        "region": String,
        "start_year": String,
        "impact": String,
        "added": Date,
        "published": Date,
        "country":String,
        "relevance": Number,
        "pestle": String,
        "source": String,
        "title": String,
        "likelihood": Number
});;

export const DataModel = mongoose.model("DataModel",DataSchema);