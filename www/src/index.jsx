import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import { ApolloProvider, Query } from 'react-apollo';
import AWSAppSyncClient from 'aws-appsync'
import { Rehydrated } from "aws-appsync-react";

const HELLO_WORLD = gql`query { hello }`;

class HelloWorld extends React.Component {
    render() {
        return (
            <Query query={ HELLO_WORLD }>
                { ({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    return (<div>Hello { data.hello }</div>);
                } }
            </Query>
        )
    }
}

const client = new AWSAppSyncClient({
    url: "https://mwhcs2kgv5aqpldok6nahlkpla.appsync-api.us-west-2.amazonaws.com/graphql",
    region: "us-west-2",
    auth: {
        type: "API_KEY",
        apiKey: "da2-fcehwhj33fcz5as5cb3lmd5mou"
    }
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <Rehydrated>
            <HelloWorld />
        </Rehydrated>
    </ApolloProvider>,
    document.getElementById('root'));
