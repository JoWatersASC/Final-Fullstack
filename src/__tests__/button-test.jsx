import ParentComponent from "../pages/button/button"
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('ParentComponent', () => {
  it('renders without crashing', () => {
    shallow(<ParentComponent />);
  });

  it('changes color when button is clicked', () => {
    const wrapper = shallow(<ParentComponent />);
    const childComponent = wrapper.find('ChildComponent').first();

    const initialColorIndex = childComponent.prop('colorIndex');

    // Simulate a button click
    childComponent.prop('onClick')(childComponent.prop('id'));

    const updatedColorIndex = wrapper.find('ChildComponent').first().prop('colorIndex');

    // Ensure that the color index has changed after the button click
    expect(updatedColorIndex).not.toBe(initialColorIndex);
  });
});