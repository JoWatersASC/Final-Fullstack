import BasicForm from "../pages/forms/BasicForm"
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
describe('BasicForm', () => {
  it('renders without crashing', () => {
    shallow(<BasicForm />);
  });

  it('adds a person to the state when the form is submitted with valid input', () => {
    const wrapper = shallow(<BasicForm />);
    
    const nameInput = wrapper.find('input[placeholder="Name"]');
    const emailInput = wrapper.find('input[placeholder="Email"]');
    const phoneInput = wrapper.find('input[placeholder="Phone #"]');
    
    // Simulate input change
    nameInput.simulate('change', { target: { value: 'John Doe' } });
    emailInput.simulate('change', { target: { value: 'john.doe@example.com' } });
    phoneInput.simulate('change', { target: { value: '123-456-7890' } });
    
    // Simulate form submission
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    const statePeople = wrapper.state('people');

    // Ensure that a person with the provided input is added to the state
    expect(statePeople.length).toBe(1);
    expect(statePeople[0]).toEqual(expect.objectContaining({
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    }));
  });
});