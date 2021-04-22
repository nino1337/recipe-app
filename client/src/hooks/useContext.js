import { useContext } from 'react';

import AppContext from '../appContext';

const useContextHook = () => {
  const [context, setContext] = useContext(AppContext);

  return [context, setContext];
};

export default useContextHook;
