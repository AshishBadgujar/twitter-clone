import React from "react";
import App from './App'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    headers: {
        authorization: localStorage.getItem('token') || ''
    }
})
const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
)