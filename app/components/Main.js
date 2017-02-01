var React = require('react');
require("./styles.css");
var SearchGithub = require('./SearchGithub');

var Main = React.createClass({
    render: function(){
        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header has-tabs is-upgraded" data-upgraded=",MaterialLayout">
                <header className="mdl-layout__header mdl-layout__header-row mdl-color--primary" role="navigation">
                    <h4>GitHub Notes</h4>
                    <SearchGithub />
                </header>
                <main className="mdl-layout__content">
                    <div className="mdl-layout__tab-panel is-active" id="overview">
                    {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
})

module.exports = Main;
