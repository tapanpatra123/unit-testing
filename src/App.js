import React, { PureComponent } from "react";
import Counter from './components/counter'
import Footer from './components/footer'
import Header from './components/header'

export default class App extends PureComponent {

  render() {
    return (
      <div className="app">
        <Header/>
        <Counter name="Title Goes Here"/>
        <Footer name={"footer contenet goes here"}/>
      </div>
    );
  }
}

