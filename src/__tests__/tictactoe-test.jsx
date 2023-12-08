import Game from "../pages/tictactoe/tictactoe"
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Game', () => {
  it('renders without crashing', () => {
    shallow(<Game />);
  });

  it('switches player when switchPlayer is called', () => {
    const wrapper = shallow(<Game />);
    
    const initialPlayer = wrapper.state('player');
    
    wrapper.instance().switchPlayer();

    const updatedPlayer = wrapper.state('player');

    expect(updatedPlayer).not.toEqual(initialPlayer);
  });

  it('checks for a winner when checkWin is called', () => {
    const wrapper = shallow(<Game />);
    
    const boardInstance = wrapper.find('Board').instance();
    
    const checkWinSpy = jest.spyOn(boardInstance, 'checkWin');

    wrapper.instance().checkWin(['X', 'O', 'X', ' ', ' ', 'O', ' ', ' ', 'X']);

    expect(checkWinSpy).toHaveBeenCalled();
  });

  it('clears the board when clearBoard is called', () => {
    const wrapper = shallow(<Game />);
    
    const boardInstance = wrapper.find('Board').instance();
    
    const clearBoardSpy = jest.spyOn(boardInstance, 'clearBoard');

    wrapper.instance().clearBoard();

    expect(clearBoardSpy).toHaveBeenCalled();
  });

  it('handles space click when handleSpaceClick is called', () => {
    const wrapper = shallow(<Game />);
    
    const gridInstance = wrapper.find('Board').instance();
    
    const handleSpaceClickSpy = jest.spyOn(gridInstance, 'handleSpaceClick');

    wrapper.instance().handleSpaceClick(1, [{ id: 1, token: ' ' }], gridInstance);

    expect(handleSpaceClickSpy).toHaveBeenCalled();
  });
});
