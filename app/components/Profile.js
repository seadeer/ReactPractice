var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactFire');
var Firebase = require('firebase');
var config = require('../config/fireconfig');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function(){
        return{
            notes: [],
            bio:{
            },
            repos: []
        }
    },
    componentWillMount: function(){
        Firebase.initializeApp(config);
        this.ref = Firebase.database().ref('usernames');
        var childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');
        helpers.getGithubInfo(this.props.params.username)
        .then(function(data){
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        }.bind(this))
    },
    componentWillUnmount: function(){
        this.unbind('notes');
    },
    init: function(username){
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillReceiveProps:function(nextProps){
        this.unbind('notes');
        this.init(nextProps.params.username);
        helpers.getGithubInfo(nextProps.params.username)
        .then(function(data){
            this.setState({
                bio: data.bio,
                repos: data.repos
            })
        }.bind(this))
    },
    handleAddNote: function(input){
        //update Firebase
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(input);
    },
    render: function(){
        console.log(this.ref.key, this.state.notes)
        return(
            <div className="mdl-grid">
                <UserProfile username={this.props.params.username} bio={this.state.bio} />
                <Repos repos={this.state.repos} username={this.props.params.username}/>
                <Notes 
                    notes={this.state.notes}
                    username={this.props.params.username}
                    addNote = {this.handleAddNote}/>
            </div>
    )
    }
})

module.exports = Profile;
