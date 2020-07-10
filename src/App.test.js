import React from "react";
import {shallow} from 'enzyme';
import { shallowToJson} from 'enzyme-to-json';
import App from './App';
import Header from './components/header'
import Counter from './components/counter'
import Footer from './components/footer'

describe("App Component",()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<App/>);
    })

    it("to snapshot",()=>{
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

    it("should render Header component", ()=>{
        const header = wrapper.find(Header);
        expect(header.exists()).toBe(true)
    })

    it("should render Counter component", ()=>{
        const counter = wrapper.find(Counter);
        expect(counter.exists()).toBe(true)
    })

    it("should render counter component", ()=>{
        const counter = wrapper.find(Counter);
        expect(counter.exists()).toBe(true)
    })

    it("should render footer component", ()=>{
        const counter = wrapper.find(Footer);
        expect(counter.exists()).toBe(true)
    })
})