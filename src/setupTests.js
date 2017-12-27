import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.document = {
  getElementById: function() { return {
    on: function() {}
  }}
};

configure({ adapter: new Adapter() });
