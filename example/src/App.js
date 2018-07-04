import React from 'react';

import {
  ContentLoading,
} from 'radargovernamental-design-system';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '600px', margin: '100px' }}>
        <ContentLoading height={350}>
          <rect x="0" y="15" rx="4" ry="4" width="343.98" height="20" />
          <rect x="0" y="55" rx="3" ry="3" width="100" height="22" />
          <rect x="110" y="55" rx="3" ry="3" width="130" height="24" />
          <rect x="0" y="105" rx="3" ry="3" width="390" height="10" />
          <rect x="0" y="135" rx="3" ry="3" width="520" height="10" />
          <rect x="0" y="165" rx="3" ry="3" width="340" height="10" />
        </ContentLoading>
      </div>
    );
  }
}
