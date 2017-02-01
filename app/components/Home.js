var React = require('react');

var Home = React.createClass({
    render: function(){
        return(
            <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                <div className="mdl-card mdl-cell mdl-cell--12-col">
                    <div className="mdl-card__supporting-text"> 
                        <h4>
                            Search by Github Username Above
                        </h4>
                    </div>
                </div>
            </section>
        )
    }
})

module.exports = Home;
