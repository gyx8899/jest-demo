import React, {useContext} from 'react';

import Context from '../store/context';

const TestHookContext = () => {
  const context = useContext(Context);

  return (
      // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
    <button type="button" onClick={context.changeTextProp}>
        Change Text
    </button>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <p>{context.stateProp}</p>
    </div>
  );
};


export default TestHookContext;
