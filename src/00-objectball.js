function gameObject (){
    let teams = {
        home: 
        {
            teamName: "Brooklyn Nets",
            colors: 
            [
                "Black",
                "White",
            ],
            players:
            {
                "Alan Anderson": 
                {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": 
                {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": 
                {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": 
                {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": 
                {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            }
        },
        away: 
        {
            teamName: "Charlotte Hornets",
            colors: 
            [
                "Turquoise",
                "Purple",
            ],
            players:
            {
                "Jeff Adrien": 
                {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": 
                {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": 
                {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": 
                {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": 
                {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            }
        },
    }

    return teams;
}

console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}
  
console.log(homeTeamName());

  // logs "Brooklyn Nets"

function numPointsScored(name){
    let result;
    let object=gameObject()
    let listOfnames=Object.keys(object.home.players)
    for (let key of listOfnames){
        if (key===name) result= object.home.players[name]['points'];
    }
    let listOfnames2=Object.keys(object.away.players)
    for (let key of listOfnames2){
        if (key===name)  result = object.away.players[name]['points'];
    }
    return result;
}
console.log(numPointsScored("Ben Gordon"))


function shoeSize(name){
    let object=gameObject()
    let Home = object.home.players;
    let Away = object.away.players;
    const result1 = Object.assign(Home, Away);
    for(let key in result1){
        if(key===name) return result1[name]['shoe']
    }
}

console.log(shoeSize("Ben Gordon"))


function teamColors(teamN){
    let object=gameObject();
    if (teamN===object.home.teamName) return object.home.colors;
    else if (teamN===object.away.teamName) return object.away.colors;
}
console.log(teamColors("Brooklyn Nets"))

function teamNames(){
    let object=gameObject();
    return [object.home.teamName, object.away.teamName]
    
}
console.log(teamNames())

function playerNumbers(team){
    let object=gameObject();
    if (team===object.home.teamName){
        return Object.keys(object.home.players).map(param =>  object.home.players[param]['number'])
    }else if (team===object.away.teamName){
        return Object.keys(object.away.players).map(key =>  object.away.players[key]['number'])
    }
}
console.log(playerNumbers('Brooklyn Nets'))
console.log(playerNumbers('Charlotte Hornets'))

[3,4,5,6].map(param=>param+3)