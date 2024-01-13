import React from 'react';
import NewsContainer from '../Cards/NewsContainer';

const Hero = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center mt-16'>
      <div className='bg-gray-100 h-2/3 w-4/5 min-w-md shadow-xl text-center flex flex-col'>
        <img
          src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          className='object-cover h-4/5 w-full'
          alt=""
        />
        <div className='flex flex-col justify-end py-4'>
          <h2 className='px-4 text-2xl font-bold text-gray-900'>First News Is in this way</h2>
          <p className='px-4 text-sm'>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Perferendis voluptas optio expedita a nesciunt amet ad
            rem neque voluptates magnam?</p>
          <a href="" className='text-green-900 font-medium'>See more</a>
        </div>
      </div>
      <NewsContainer />
    </div>
  );
}

export default Hero;
