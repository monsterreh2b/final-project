// include react
var React = require("react");

//create saved component
var Nav = React.createClass({

    render: function () {

        return (

            <div>

                <div class="section">
                    <div class="row">
                        <div class="col s12">
                            <ul class="tabs">
                                <li class="tab col s3"><a href="/portfolio">Portfolio</a></li>
                                <li class="tab col s3"><a href="/balances" class="active">Balances</a></li>
                                <li class="tab col s3"><a href="/trading">Trading</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
});

// export component for use in other files
module.exports = Nav;