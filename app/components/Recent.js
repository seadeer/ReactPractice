var React = require('react');
var Router = require('react-router');

var Recent = React.createClass({
    mixins: [Router.History],
    propTypes: {
        users: React.PropTypes.array.isRequired
    },
    onUserClick: function(user){
        this.history.pushState(null, "/profile/" + user)
    },
    render: function(){
        var users = this.props.users.map(function(user, index){
            let handleClick = this.onUserClick.bind(this, user)
            return(
                <span className="mdl-chip mdl-chip--contact" key={index} onClick={handleClick}>
                <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white"><i className="material-icons mdl-list__item-icon">person</i></span>
                <span className="mdl-chip__text">{user}</span>
                </span>
            )
        }.bind(this));
        console.log(users);
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>Recently viewed</h4>
                        {users}
                </div>
            </div>
        )
    }
})

module.exports = Recent;