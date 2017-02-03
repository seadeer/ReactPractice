var axios = require('axios');

/* get a list of repositories from Github*/
function getRepos(username){
    return axios.get('https://api.github.com/users/' + username + '/repos').then(function(response){
        if(!response.headers.link){
            return response.data;
        }
        else{
            var data = response.data;
            var rels = getRels(response.headers.link)
            var calls = makeCalls(username, rels.total);
            return axios.all(calls)
            .then(function(arr){
                for(var i = 0; i < arr.length; i++){
                    data = data.concat(arr[i].data);
                    console.log("DATA:", data)
                }
                return data;
            })
        }
    });;
};

/* get user profile info from Github */
function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username);
}

/* Get links to page through responses from Github API */
function getRels(header){
    var relsArr = {};
    var temp = header.split(', ');
    var regex = /page=([0-9]+)/
    var linkRegex = /\<([\S]+)\>/
    relsArr['nextLink'] = linkRegex.exec(temp[0].split('; ')[0])[1];
    relsArr['last'] = temp[1].split('; ')[0];
    relsArr['total'] = parseInt(regex.exec(temp[1].split('; ')[0])[1]);
    var foundLast = temp[1].split('; ')[1].indexOf("prev");
    if(foundLast == -1){
        relsArr['isLast'] = false
    }
    else{
        relsArr['isLast'] = true
    }
    return relsArr;
}

/* request all pages of data from Github API */
function makeCalls(username, total){
    var calls = [];
    for(var i = 2; i <= total; i++){
        calls.push(axios.get('https://api.github.com/users/' + username + '/repos?page=' + i.toString()));
    }
    return calls;
}

/* bundle together all requests and return data */
var helpers = {
    getGithubInfo: function(username){
        return axios.all([getRepos(username), getUserInfo(username)])
        .then(function(arr){
            console.log("DATA:", arr[0]);
            return{
                repos: arr[0],
                bio: arr[1].data
            }
        })
    }
}

module.exports = helpers;