import React from "react";
import Layout from "../aside/Layout";

class ErrorMessage extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <br />
                    <h2 style={{ color: "white" }}>error 400 : bad request</h2>
                    <h2 style={{ color: "white" }}>Ooops, please ask for new request in search-bar :</h2>
                    <h2 style={{ color: "white" }}>Click on banner to return to Home-page</h2>
                </div>
            </Layout>
        );
    }
}

export default ErrorMessage;
