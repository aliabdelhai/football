const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Player = require('../models/Player');
const Team = require('../models/Team');


mongoose.connect('mongodb://localhost/teams', { useNewUrlParser: true })
    .then(function(){
        console.log("Db connected")
})
    .catch(function(err){
        console.log("not connected")
        console.log(err.message);
});

router.post('/addPlayer', async (req, res ) => {
    try{
        const player = new Player(req.body)
        console.log(player)
        await player.save()
        res.send(player)
    }
    catch(error){
        res.send(error)
    }
})

router.post('/addTeam', async (req, res ) => {
    try{
        const team = new Team(req.body)
        console.log(team)
        await team.save()
        res.send(team)
    }
    catch(error){
        res.send(error)
    }
})

router.get('/team/:teamName', async (req, res ) => {
    try{
        const teamName = req.params.teamName
        console.log(teamName)
        const teamPlayers = await Player.find({team: teamName})
        console.log(teamPlayers)
        res.send(teamPlayers)
    }
    catch(error){
        res.send(error)
    }
})

router.get('/league/:league', async (req, res ) => {
    try{
        const league = req.params.league
        console.log(league)
        const teams = await Team.find({ league })
        console.log(teams)
        res.send(teams)
    }
    catch(error){
        res.send(error)
    }
})

router.delete('/deletePlayer', async (req, res ) => {
    try{
        const firstName = req.body.player.firstName
        const lastName = req.body.player.lastName
        const team = req.body.player.team
        const player = await Player.findOneAndDelete({firstName, lastName, team})
        res.send(player)
    }
    catch(error){
        res.send(error)

    }
})

router.get('/players', async (req, res) => {
    try{
        const players = await Player.find({})
        res.send(players);
    }
    catch(error) {
        res.send(error)
    }
})

router.put('/team/:name/:newTeam', async (req, res) => {
    let name = req.params.name
    let newTeam = req.params.newTeam
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { team: newTeam }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/jersey/:name/:newJersey', async (req, res) => {
    let name = req.params.name
    let newJersey = req.params.newJersey
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { jersey: newJersey }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/image/:name/:newImg', async (req, res) => {
    let name = req.params.name
    let newImg = req.params.newImg
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { img: newImg }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/position/:name/:newPos', async (req, res) => {
    let name = req.params.name
    let newPosition = req.params.newPos
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1);
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { pos: newPosition }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/appearances/:name/:appearances', async (req, res) => {
    let name = req.params.name
    let appearances = req.params.appearances
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { appearances }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/goals/:name/:goals', async (req, res) => {
    let name = req.params.name
    let goals = req.params.goals
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { goals }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})


router.put('/assists/:name/:assists', async (req, res) => {
    let name = req.params.name
    let assists = req.params.assists
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { assists }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.put('/minutesPlayed/:name/:minutesPlayed', async (req, res) => {
    let name = req.params.name
    let minutesPlayed = req.params.minutesPlayed
    let firstName; 
    let lastName;
    if(name.indexOf(' ') >= 0) {
        firstName = name.substring(0, name.indexOf(" "));
        lastName = name.substring(name.indexOf(" ") + 1)
    } else {
        firstName = name;
        lastName = ""
    }
    try {
        const player = await Player.findOneAndUpdate({ firstName, lastName }, { minutesPlayed }, { new: true })
        res.send(player)
    } catch (error) {
        res.send(error)
    }
})

router.get('/goalkeepers', async (req, res) => {
    try{
        const goalkeepers = await Player.find({pos: "GoalKeeper"})
        res.send(goalkeepers)
    } catch (error) {
        res.send(error)
    }
})

router.get('/defenders', async (req, res) => {
    try{
        const defenders = await Player.find({pos: "Defender"})
        res.send(defenders)
    } catch (error) {
        res.send(error)
    }
})

router.get('/midfielders', async (req, res) => {
    try{
        const midfielders = await Player.find({pos: "Midfielder"})
        res.send(midfielders)
    } catch (error) {
        res.send(error)
    }
})

router.get('/forwards', async (req, res) => {
    try{
        const forwards = await Player.find({pos: "Forward"})
        res.send(forwards)
    } catch (error) {
        res.send(error)
    }
})
module.exports = router