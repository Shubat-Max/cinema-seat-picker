import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Session } from "./index";
import {PageWrapper} from './Session.sc'

Enzyme.configure({ adapter: new Adapter() });

describe("<Session />", () => {
  const session = shallow(<Session />);

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect').mockImplementation(f => f())

  });

  it(`renders a styled component PageWrapper`, () => {
    expect(session.find(PageWrapper)).toHaveLength(1);
  });

  describe('when initial data loaded', () => {

  });
});
