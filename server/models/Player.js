const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    firstName: String,
    lastName: String,
    pos: String,
    img: String,
    jersey: Number,
    team: String,
    appearances: Number,
    minutesPlayed: Number,
    goals: Number,
    assists: Number
})

const Player = mongoose.model("player", playerSchema)
module.exports = Player