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
            <div>
            <div className="search-box text-box">
                <div className="mdl-textfield mdl-js-textfield card-textfield">
                <input type="text" className="mdl-textfield__input" placeholder="Add note" ref={this.setRef}/>
                </div>
            </div>
            <div className="search-box button-box">
                <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored mdl-js-ripple-effect" type="button" onClick={this.handleSubmit}><i className="material-icons">add</i></button>
            </div>
            </div>
        )
    }
});

module.exports = AddNote;