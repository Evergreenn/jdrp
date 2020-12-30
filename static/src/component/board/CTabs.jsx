import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import Board from './board';

class CTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: '',
        }
        
    }

    componentDidMount() {
        fetch("http://localhost:8000/static/images/map/Tds4.jpg")
            .then(
                (result) => {
                    this.setState({
                        map: result.url,

                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }



    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8" >
                            {/* <div className="col-md-8" style={{backgroungImage:`url(${this.state.map})`}}> */}
                            <img className="img-fluid" src={this.state.map} alt="map" />

                        </div>
                        <div className="col-md-4 border">
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Home">
                                    <Board c={this.props.rep}/>
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    toto
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                   toto
                                </Tab>
                            </Tabs>


                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default CTabs;