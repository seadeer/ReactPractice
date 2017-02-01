var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins: [Router.History],
    getRef: function(ref){
        this.usernameRef = ref;
    },
    handleSubmit: function(){
        var username = this.usernameRef.value;
        this.usernameRef.value = "";
        this.history.pushState(null, "/profile/" + username)
    },
    render: function(){
        return(
            <form onSubmit={this.handleSubmit}>
                    <div className="search-box">
                        <input type="text" className="mdl-textfield__input" id="search" placeholder="Search Github" ref={this.getRef}/>
                    </div>
                    <div className="search-box">
                        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search" type="Submit" data-upgraded=",MaterialButton" onClick={this.handleSubmit}>
                            <i className="material-icons">search</i>
                        </label>
                    </div>
            </form>
        )
    }
})

module.exports = SearchGithub;