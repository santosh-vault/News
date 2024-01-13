import React from 'react';

const BigNewsCard = () => {
  return (
    <div className='bg-gray-100 rounded-md overflow-hidden shadow-md w-2/3'>
      <div
        className='h-96 w-full bg-cover bg-center relative'
        style={{ backgroundImage: "url('https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg')" }}
      >
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-white text-center'>
            <h3 className='text-xl font-bold mb-2'>Title</h3>
            <p className='text-sm'>Paragraph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNewsCard;
