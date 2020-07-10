import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json'
import Header from './header'

describe("header section",()=>{

    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Header />)
    })

    it('to snapshot',()=>{
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it("render without error",()=>{
        const header = wrapper.find(`[data-list="headerSection"]`)
        expect(header.length).toBe(1)
    })

    it("display logo", ()=>{
        const logo = wrapper.find(`[data-list="HeaderLogo"]`)
        expect(logo.length).toBe(1)
    })
})