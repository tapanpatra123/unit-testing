import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson} from 'enzyme-to-json';
import Button from './button';

describe("button component",()=>{
    let wrapper;
    const props ={
        className : 'className',
        btnText : "Increase",
        handleBtnOnclick: jest.fn(),
    }
    
    beforeEach(()=>{
        wrapper = shallow(<Button {...props}/>)
    })

    it('to snapshot',()=>{

    })

    it("receive classname as props",()=> {
        //expect(wrapper.find(`[data-list="buttonComponent"]`).text()).toBe("className")
    })

})