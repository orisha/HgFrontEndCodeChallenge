import React from 'react';
import { shallow } from 'enzyme';
import Plan from './Plan.jsx';
import {describe, expect, it} from "@jest/globals";

describe("Plan", () => {
    it("should render initial layout", () => {
        // when
        const component = shallow(<Plan />);
        // then
        expect(component.getElements()).toMatchSnapshot();
    });
});
