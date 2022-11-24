import React from "react";
import ReactDOM from "react-dom";
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Footer />
        </Provider>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));
