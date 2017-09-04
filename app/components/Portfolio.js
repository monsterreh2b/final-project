// include react
var React = require("react");

//create saved component
var Portfolio = React.createClass({

    render: function () {

        return (
            <div className="row">
                <div className="col s4">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title">
                                        <div className="text-center">
                                            <b>Total Account Value</b>
                                        </div>
                                    </div>
                                    <div className="text-center">$123,565.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s4">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title">
                                        <div className="text-center">
                                            <b>Positions</b>
                                        </div>
                                    </div>
                                    <div className="text-center">6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s4">
                    <div className="row">
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-title">
                                        <div className="text-center">
                                            <b>Cash</b>
                                        </div>
                                    </div>
                                    <div className="text-center">$100,000.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
});

// export component for use in other files
module.exports = Portfolio;