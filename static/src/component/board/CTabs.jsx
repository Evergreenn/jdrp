import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import DragToReorderList from '../DragADropInventory';
import Board from './board';
import background from "../../images/table.jpg";
import background2 from "../../images/parchemin.png";

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
                <div className="container-fluid" style={{ backgroundImage: `url(${background2})`, backgroundRepeat: 'no-repeat' }}>

                    <div className="container-fluid row" style={{ padding: 5+ '%', height: 1500, width: 100 + '%', marginLeft: 0 + '%' }}>
                        <div className="col-md-8" >
                            <img className="img-fluid" src={this.state.map} alt="map" className="map" />
                        </div>
                        <div className="col-md-4">
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="tabs-custom">
                                <Tab eventKey="home" title="Personnage">
                                    <Board c={this.props.c} />
                                </Tab>
                                <Tab eventKey="profile" title="Inventaire">
                                    <DragToReorderList />
                                </Tab>
                                <Tab eventKey="contact" title="Soon" disabled>
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