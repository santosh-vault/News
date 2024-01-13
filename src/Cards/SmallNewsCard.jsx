import React from 'react';

const SmallNewsCard = ({ newsData }) => {
  return (
    <div className='bg-gray-100 p-4 rounded-md shadow-md w-full mb-6 '>
      <h2 className='text-lg font-bold mb-2'>{newsData.title}</h2>
      <p className='text-sm text-gray-700'>{newsData.description}</p>
    </div>
  );
}

export default SmallNewsCard;
