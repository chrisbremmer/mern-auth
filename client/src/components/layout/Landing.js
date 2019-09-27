import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <div
                style={{ height: "75vh" }}
                className="container valign-wrapper"
            >
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            Can <b>YOU</b> beat the competition or will you join
                            the zombie masses?{" "}
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Find out in this exciting take on fantasy football
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;
