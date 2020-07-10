import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';
import { shallowToJson} from 'enzyme-to-json';

describe("footer",()=>{

    let wrapper;
    
    const props = {
        name : "footer contenet goes here"
    }

    beforeEach(()=>{
        wrapper = shallow(<Footer {...props}/>)
    });

    it("for snapshot",()=>{
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })

    it("should render footer title",()=>{
        const gotoText = wrapper.find(".footer").text();
        expect(gotoText).toBe("footer contenet goes here");
    })
})


// describe("footer",()=>{
    // it("for snapshot",()=>{
    //     const wrapper = shallow(<Footer name= {"Footerr"}/>);
    //     expect(shallowToJson(wrapper)).toMatchSnapshot()
    // })

    // it("should render footer title",()=>{
    //     const wrapper = shallow(<Footer name= {"Footerr"}/>);
    //     const gotoText = wrapper.find(".footer");
    //     expect(gotoText.text()).toBe("Footerr");
    // })
// })



