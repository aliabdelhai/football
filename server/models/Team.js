const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
    team: String,
    league: String,
    logo: String
})

const Team = mongoose.model("team", teamSchema)
module.exports = Team