var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
    propTypes:{
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired,
    },
    render: function(){
        console.log('Notes: ', this.props.notes)
        return(
            <div className="mdl-cell mdl-card mdl-cell--4-col mdl-shadow--2dp">
                <div className="mdl-card__supporting-text">
                    <h4>Notes for {this.props.username}</h4>
                    <AddNote username={this.props.username} addNote={this.props.addNote}></AddNote> 
                    <NotesList notes={this.props.notes} />
                </div>
            </div>
        )
    }
})

module.exports = Notes;
