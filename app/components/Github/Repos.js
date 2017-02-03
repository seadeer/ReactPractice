var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function(){
        var langs = getLanguages(this.props.repos)
        console.log(langs);
        var languages = Object.keys(langs).map(function(key){
            return(
                <li className="mdl-list__item" key={key}>
                    <span className="mdl-list__item-primary-content">
                    {key}: {langs[key]}
                    </span>
                </li> 
            )
        });
        var repos = this.props.repos.map(function(repo, index){
            var description = "No description"
            if(repo.description){
                description = repo.description
            }
            return(
                <li className="" key={index}>
                    <span className="">
                    {repo.html_url && <span><a href={repo.html_url}>{repo.name}
                    </a></span>}
                    <p className="">{description}</p>
                    </span>
                </li>
            )
        })
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>{repos.length} Repos</h4>
                    <ul className="mdl-list compact-list">
                        {languages}
                    </ul>
                    <ul className="mdl-list">
                        {repos}
                    </ul>
                </div>
            </div>
        )
    }
})

function getLanguages(repos){
    var langs = {}
    for(var i = 0; i < repos.length; i++){
        if(repos[i].language in langs){
            if(repos[i].language == null){
                langs['Unspecified language'] ++;
            }
            else{
                langs[repos[i].language] ++
            }
        }
        else{
            if(repos[i].language == null){
                langs['Unspecified language'] = 1;
            }
            else{
                langs[repos[i].language] = 1;
            }
        }
    }
    return langs;
}

module.exports = Repos;
