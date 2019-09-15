import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import jsdom from 'jsdom';

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
