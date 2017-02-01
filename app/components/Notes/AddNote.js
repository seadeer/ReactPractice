var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired,
    },
    setRef: function(ref){
        this.note = ref;
    },
    handleSubmit: function(){
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    },
    render: function(){
        return(
            <div className="">
                <div className="mdl-textfield mdl-js-textfield">
                <input type="text" className="mdl-textfield__input" placeholder="Add note" ref={this.setRef}/>
                </div>
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
});

module.exports = AddNote;