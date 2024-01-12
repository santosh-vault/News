import React from 'react';

const NewsCard = ({ title, description, imageUrl }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-80 m-2'>
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <a href="#" className="block mt-3 text-green-900 hover:underline font-medium">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
