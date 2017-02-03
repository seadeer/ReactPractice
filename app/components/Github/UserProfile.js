var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function(){
        console.log("BIO:", this.props.bio)
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>{this.props.username}'s profile</h4>
                    <ul className="mdl-list">
                    {this.props.bio.avatar_url && <li><img className="avatar-pic" src={this.props.bio.avatar_url}/></li>}
                    {this.props.bio.name && <li>Name: {this.props.bio.name}</li>}
                    {this.props.bio.bio && <li>About: {this.props.bio.bio}</li>}
                    {this.props.bio.location && <li>Location: {this.props.bio.location}</li>}
                    {this.props.bio.company && <li>Company: {this.props.bio.company}</li>}
                    {this.props.bio.followers && <li>Followers: {this.props.bio.followers}</li>}
                    {this.props.bio.following && <li>Following: {this.props.bio.following}</li>}
                    </ul>
                </div>
            </div>
        )
    }
})

module.exports = UserProfile;
