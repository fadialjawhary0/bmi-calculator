import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='spinner-container'>
      <ClipLoader color='#345ff6' />
    </div>
  );
};

export default Loader;
