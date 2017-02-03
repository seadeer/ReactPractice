var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactFire');
var Firebase = require('firebase');
var config = require('../config/fireconfig');
var helpers = require('../utils/helpers');
var Recent = require('./Recent');

var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function(){
        return{
            notes: [],
            bio:{
            },
            repos: [],
            users: [],
        }
    },
    componentWillMount: function(){
        Firebase.initializeApp(config);
        this.ref = Firebase.database().ref('usernames');
        this.init(this.props.params.username)
        
    },
    componentWillUnmount: function(){
        this.unbind('notes');
    },
    init: function(username){
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');
        helpers.getGithubInfo(username)
        .then(function(data){
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        }.bind(this));
        this.ref.limitToLast(10).on('value', function(dataSnapshot){
            var items = [];
            dataSnapshot.forEach(function(item){
                items.push(item.key);
            }.bind(this));

            this.setState({
                users: items
            })
        }.bind(this))
    },
    componentWillReceiveProps:function(nextProps){
        this.unbind('notes');
        this.init(nextProps.params.username);
    },
    handleAddNote: function(input){
        //update Firebase
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(input);
    },
    render: function(){
        console.log(this.ref.key, this.state.notes)
        return(
            <div className="mdl-grid" id="profile-display">
                <UserProfile username={this.props.params.username} bio={this.state.bio} />
                <Notes 
                    notes={this.state.notes}
                    username={this.props.params.username}
                    addNote = {this.handleAddNote}/>
                <Recent users={this.state.users}/>
                <Repos repos={this.state.repos} username={this.props.params.username}/>
            </div>
    )
    }
})

module.exports = Profile;
