var React = require('react');
var NotesList = React.createClass({
    render: function(){
        var notes = this.props.notes.map(function(note, index){
            return(
                <span className="mdl-chip mdl-chip--deletable" key={index}>
                    <span className="mdl-chip__text">{note['.value']}</span>
                    <button type="button" className="mdl-chip__action"><i className="material-icons">cancel</i></button>
                </span>)
        })
        return(<div>{notes}</div>)
    }
});

module.exports = NotesList;
