var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function(){
        var repos = this.props.repos.map(function(repo, index){
            var description = "No description"
            if(repo.description){
                description = repo.description
            }
            return(
                <li className="mdl-list__item--three-line" key={index}>
                    <span className="mdl-list__item-primary-content">
                    {repo.html_url && <span><a href={repo.html_url}>{repo.name}
                    </a></span>}
                    <p className="mdl-list__item-text-body">{description}</p>
                    </span>
                </li>
            )
        })
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
                <h4>{repos.length} Repos</h4>
                <ul className="mdl-list">
                    {repos}
                </ul>
            </div>
            </div>
        )
    }
})

module.exports = Repos;
