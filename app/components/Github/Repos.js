var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function(){
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
                <h4>Repos</h4>
                <p>{this.props.repos}</p>
            </div>
            </div>
        )
    }
})

module.exports = Repos;
