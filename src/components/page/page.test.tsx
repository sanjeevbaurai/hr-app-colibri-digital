import React from 'react';
import { render } from '@testing-library/react';

import Page from '.';

it('renders the Page component', () => {
  render(
    <Page title="test">
      <div>test</div>
    </Page>,
  );
});
