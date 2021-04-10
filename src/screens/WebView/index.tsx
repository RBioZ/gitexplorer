import React from 'react';

import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';

const Web: React.FC = () => {
  const route = useRoute<
    RouteProp<
      {
        params: {
          url: string;
        };
      },
      'params'
    >
  >();

  return (
    <WebView source={{ uri: route.params.url }} style={{ marginTop: 20 }} />
  );
};

export default Web;
