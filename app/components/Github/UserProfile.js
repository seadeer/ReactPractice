var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function(){
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>User Profile</h4>
                    <p>Username: {this.props.username}</p>
                    <p>Bio: {this.props.bio.name}</p>
                </div>
            </div>
        )
    }
})

module.exports = UserProfile;
