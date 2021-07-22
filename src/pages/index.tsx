import React from 'react';

import {
  Page,
  // Chart
  Dashboard
} from '../components';

const IndexPage: React.FC = () => {
  return (
    <Page title="BT Home Essentials Broadband | Low Cost Broadband | Broadband on benefits">
      {/* <Chart /> */}
    <Dashboard />
    </Page>
  );
};

export default IndexPage;
