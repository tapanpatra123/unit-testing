import React from 'react';
import { shallow, } from 'enzyme';
import Counter from './counter'
import { shallowToJson} from 'enzyme-to-json';

describe("Counter page",()=>{

    let wrapper;
    const props ={
        name : "Title Goes Here"
    }
    
    beforeEach(()=>{
        wrapper = shallow(<Counter {...props}/>)
    })

    it("to snapshot",()=>{
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    })

    it("Receive props Name",()=>{
        const gotoText = wrapper.find("h1").text();
        expect(gotoText).toBe("Title Goes Here");
    })

    it("render the Default value of counter",()=>{
        const count = wrapper.find("h2");
        expect(count.text()).toBe('0');
    })
    
    it("render the click event of increment button and increment counter value",()=>{
        const buttoninCrement = wrapper.find('.increament');
        buttoninCrement.simulate('click');
        const count = wrapper.find("h2");
        expect(count.text()).toBe('1');
    })

    it("render the click event of decrrment button and decrement counter value",()=>{

        const buttoninCrement = wrapper.find('.increament');
        buttoninCrement.simulate('click');
        expect(wrapper.find("h2").text()).toBe('1');

        const buttonDecreament = wrapper.find('.decreament');
        buttonDecreament.simulate('click');
        expect(wrapper.find("h2").text()).toBe('0');
    })

    // it("")

})