// include react
var React = require("react");

//create saved component
var Balances = React.createClass({

    render: function () {

        return (

            <div>

                <div className="row">
                    <h5>Portfolio Value</h5>
                </div>

                <div className="row">
                    <div className="col s9">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Portfolio Value</td>
                                    <td className="text-right">$123,565.00</td>
                                </tr>
                                <tr>
                                    <td>Stock Positions</td>
                                    <td className="text-right">6</td>
                                </tr>
                                <tr>
                                    <td>Cash Balance</td>
                                    <td className="text-right">$100,000.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row">
                    <h5>Additional Information</h5>
                </div>
                <div className="row">
                    <div className="col s9">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Pending Purchases</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td>Cash Balance</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                                <tr>
                                    <td>Margin Balance</td>
                                    <td className="text-right">$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        );
    }
});

// export component for use in other files
module.exports = Balances;