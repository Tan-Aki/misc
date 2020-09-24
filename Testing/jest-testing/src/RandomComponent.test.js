import React from 'react';
import { render } from '@testing-library/react';

import { RandomComponent } from './RandomComponent';

it('renders the correct content', () => {
    const { getByText } = render(<RandomComponent />);

    // expect(getByText('TODOs')).not.toBeNull();
    // expect(getByLabelText('What needs to be done?')).not.toBeNull();
    // expect(getByText('Add #1')).not.toBeNull();

    // leaner version
    getByText('Hello');
});
