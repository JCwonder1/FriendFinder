const express = require('express'); ``
const router = express.Router();
let friends = require('../../data/friends.js');

module.exports = () => {
    router.get ('/', (req, res, next) => {
        console.log(req.query.modal);
        return res.render('survey', {
            page: 'Survey',
            modal: req.query.modal,
            
        } );
        
    });

    router.post('/', (req, res, next) =>{
        
        let bestMatch = {};
        
        let userTotalScore = req.body.scores.map(function(item) {
          return parseInt(item, 10);
        });
       
        
        let userScoreSum = userTotalScore.reduce((a, b) => a + b, 0);
        console.log("DEBUG: USER POSTED SUM:", userScoreSum);
        friends.forEach(element => {
            let scoreToTest = element.scores.reduce((a,b) => a + b, 0);
            console.log("DEBUG: INSIDE LOOP SUM OF ARRAY SCORES", scoreToTest);
            !bestMatch.friendDifference ? bestMatch.friendDifference = Math.abs(scoreToTest - userScoreSum) : bestMatch.friendDifference = bestMatch.friendDifference;
            console.log("DEBUG: Best Match Set to:",bestMatch.friendDifference)
            if (Math.abs(scoreToTest - userScoreSum) <= bestMatch.friendDifference) {
            
              bestMatch.name = element.name;
              bestMatch.photo = element.photo;
              bestMatch.friendDifference = scoreToTest;
              console.log("DEBUG: BEST MATCH SET TO:", bestMatch);
            }; 

        });
        
        let userToStore = {
            name: req.body.name,
            photo: req.body.photo,
            scores: userTotalScore
        }
        friends.push(userToStore);
        
        res.send(bestMatch);
    });

    return router;
};

