import { useMemo } from 'react';

import { initializeApollo } from '@cr-lottery/utils/initialize-apollo';

export const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
