/////////////////////////////////////////////////////////////////////////////
//// With basic queries in react dom
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders the correct content', () => {
//     const root = document.createElement('div');
//     ReactDOM.render(<App />, root);

//     expect(root.querySelector('h1').textContent).toBe('TODOs');
//     expect(root.querySelector('label').textContent).toBe('What needs to be done?');
//     expect(root.querySelector('button').textContent).toBe('Add #1');
// });


/////////////////////////////////////////////////////////////////////////////
//// with testing library
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { getQueriesForElement } from '@testing-library/dom';

// it('renders the correct content', () => {
//     const root = document.createElement('div');
//     ReactDOM.render(<App />, root);

//     const { getByText, getByLabelText } = getQueriesForElement(root);

//     // expect(getByText('TODOs')).not.toBeNull();
//     // expect(getByLabelText('What needs to be done?')).not.toBeNull();
//     // expect(getByText('Add #1')).not.toBeNull();

//     // leaner version
//     getByText('TODOs');
//     getByLabelText('What needs to be done?');
//     getByText('Add #1');
// });

/////////////////////////////////////////////////////////////////////////////
//// with testing library and abstract render
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { getQueriesForElement } from '@testing-library/dom';

// const render = (component) => {
//     const root = document.createElement('div');
//     ReactDOM.render(component, root);
//     return getQueriesForElement(root);
// };

// it('renders the correct content', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // expect(getByText('TODOs')).not.toBeNull();
//     // expect(getByLabelText('What needs to be done?')).not.toBeNull();
//     // expect(getByText('Add #1')).not.toBeNull();

//     // leaner version
//     getByText('TODOs');
//     getByLabelText('What needs to be done?');
//     getByText('Add #1');
// });

/////////////////////////////////////////////////////////////////////////////
//// with react testing library
/////////////////////////////////////////////////////////////////////////////

//// to UPDATE PROPS : 
//// https://testing-library.com/docs/example-update-props
//// the basic idea is to simply call `render` again and provide the same container
//// that your first call created for you.

// import React from 'react';
// import { render } from '@testing-library/react';

// import App from './App';

// it('renders the correct content', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // expect(getByText('TODOs')).not.toBeNull();
//     // expect(getByLabelText('What needs to be done?')).not.toBeNull();
//     // expect(getByText('Add #1')).not.toBeNull();

//     // leaner version
//     getByText('TODOs');
//     getByLabelText('What needs to be done?');
//     getByText('Add #1');
// });

/////////////////////////////////////////////////////////////////////////////
////  Simulating user interaction with fireEvent
//// before, you would use enzime, and get a wrapper object, and access the state of that wrapper object
//// expect(wrapper.state("items")).toBe(["First task"])
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';

// import App from './App';

// it('renders the correct content', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // expect(getByText('TODOs')).not.toBeNull();
//     // expect(getByLabelText('What needs to be done?')).not.toBeNull();
//     // expect(getByText('Add #1')).not.toBeNull();

//     // leaner version
//     getByText('TODOs');
//     getByLabelText('What needs to be done?');
//     getByText('Add #1');
// });

// // "it" or "test" does the same , just a different keyword
// test('allows users to add items to their list', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     const input = getByLabelText('What needs to be done?');

//     fireEvent.change(input, { target: { value: 'First task' } });
//     fireEvent.click(getByText('Add #1'));

//     getByText('First task');
//     getByText('Add #2');
// });

/////////////////////////////////////////////////////////////////////////////
////  Simulating user interaction with user-event
/////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import App from './App';

// it('renders the correct content', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     // expect(getByText('TODOs')).not.toBeNull();
//     // expect(getByLabelText('What needs to be done?')).not.toBeNull();
//     // expect(getByText('Add #1')).not.toBeNull();

//     // leaner version
//     getByText('TODOs');
//     getByLabelText('What needs to be done?');
//     getByText('Add #1');
// });

// // "it" or "test" does the same , just a different keyword
// test('allows users to add items to their list', () => {
//     const { getByText, getByLabelText } = render(<App />);

//     const input = getByLabelText('What needs to be done?');

//     // fireEvent.change(input, { target: { value: 'First task' } });
//     userEvent.type(input, 'First task');
//     // with the userEvent.type you can specify the number of milliseconds to wait in between key strokes
//     // options.delay is the number of milliseconds that pass between two characters are typed. By default it's 0. You can use this option if your component has a different behavior for fast or slow users. If you do this, you need to make sure to await!
//     fireEvent.click(getByText('Add #1'));

//     getByText('First task');
//     getByText('Add #2');
// });

/////////////////////////////////////////////////////////////////////////////
////  testing async code  
/////////////////////////////////////////////////////////////////////////////

import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { api } from './api';

jest.mock('./api');

test('allows users to add items to their list', async () => {
    const todoText = 'First task';

    api.createItem.mockResolvedValueOnce({ id: 123, text: todoText });
    const { getByText, getByLabelText } = render(<App />);

    const input = getByLabelText('What needs to be done?');

    userEvent.type(input, todoText);
    fireEvent.click(getByText('Add #1'));

    await wait(() => getByText(todoText));

    // to avoid false positives, make sure the api has been called
    expect(api.createItem).toHaveBeenCalledTimes(1);
    expect(api.createItem).toHaveBeenCalledWith(
        '/items',
        expect.objectContaining({ text: todoText })
    );
});
