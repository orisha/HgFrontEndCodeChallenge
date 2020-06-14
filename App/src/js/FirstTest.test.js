import React from 'react';
import {default as Enzyme, shallow} from 'enzyme';
import FirstTest from './FirstTest.jsx';
import {describe, expect, it} from "@jest/globals";
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() })
describe("FirstTest", () => {
    it("should render initial layout", () => {
        // when
        const component = shallow(<FirstTest />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });
});
