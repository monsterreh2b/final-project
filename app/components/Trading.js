// include react
var React = require("react");
var Request = require("superagent");

//create saved component
class Trading extends React.Component {
    constructor() {
        super();
        this.state = {
            reports: [],
            searchText: ''
        }
        this.search = this.search.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    updateStateReports(data) {
        const timesSeries = data['Time Series (Daily)'];
        const newReports = [];
        Object.keys(timesSeries).slice(0, 5).forEach((key, index) => {
            newReports.push(timesSeries[key])
        });
        this.setState({ reports: newReports });
    }

    getResultsElements() {
        const elements = this.state.reports.map((report, index) => {
            return (
                <div key={index} className="col s2">
                    <div className="card-panel">
                        <div className="text-center">
                            <div>Last Price</div>
                            <div>{report['4. close']}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return elements;
    }

    search(event) {
        event.preventDefault();
        // this is for demo purposes only, it can be made better and the 
        // token can be obfuscated
        const { searchText } = this.state;
        Request.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${searchText}&apikey=0X6T0ARD2UNWMQZG`).end((err, res) => {
            if (err) {
                return console.log(err);
            } else {
                this.updateStateReports(res.body);
            }
        })
        console.log('We should initiate the search (api call here) with the search query value of ', this.state.searchText);
    }

    handleInputChange(event) {
        this.setState({ searchText: event.target.value });
    }

    render() {
        return (

            <div>

                <div className="row">
                    <form className="col s12" onSubmit={this.search}>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate" value={this.state.searchText} onChange={this.handleInputChange} />
                            <label for="icon_prefix">Stock Search</label>
                        </div>
                        <div className="input-field col s6">
                            <a className="waves-effect waves-light btn" onClick={this.search}>Search</a>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <h5>Stock Name</h5>
                </div>
                <div className="row">
                    {this.getResultsElements()}
                </div>
                <div className="row">
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Open</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>Previous Close</td>
                                    <td className="text-right">157.86</td>
                                </tr>
                                <tr>
                                    <td>52 - Week Range</td>
                                    <td className="text-right">102.53 - 162.51</td>
                                </tr>
                                <tr>
                                    <td>Average Volume (10 days)</td>
                                    <td className="text-right">27,818,610</td>
                                </tr>
                                <tr>
                                    <td>P/E (Trailing 12 mo.)</td>
                                    <td className="text-right">17.90x</td>
                                </tr>
                                <tr>
                                    <td>EPS (Trailing 12 mo.)</td>
                                    <td className="text-right">8.82</td>
                                </tr>
                                <tr>
                                    <td>Next Earnings Date</td>
                                    <td className="text-right">10/23/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col s6">
                        <table className="bordered">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Market Cap</td>
                                    <td className="text-right">815.4 B</td>
                                </tr>
                                <tr>
                                    <td>Shares Outstanding</td>
                                    <td className="text-right">5.2 B</td>
                                </tr>
                                <tr>
                                    <td>Beta</td>
                                    <td className="text-right">1.5</td>
                                </tr>
                                <tr>
                                    <td>Dividend Yield</td>
                                    <td className="text-right">1.60%</td>
                                </tr>
                                <tr>
                                    <td>Quarterly Yield</td>
                                    <td className="text-right">0.63</td>
                                </tr>
                                <tr>
                                    <td>Ex-Dividend Date</td>
                                    <td className="text-right">08/10/17</td>
                                </tr>
                                <tr>
                                    <td>Dividend Payable Date</td>
                                    <td className="text-right">08/17/17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <p>Chart goes here...</p>
                    </div>
                </div>

            </div>

        );
    }
}

// export component for use in other files
module.exports = Trading;