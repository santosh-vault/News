import React from 'react'
import NewsCard from './NewsCard';

const NewsContainer = () => {

    const newsData = [
        {
          title: "News Title 1",
          description: "Description for News 1",
          imageUrl: "https://example.com/news1.jpg",
        },
        {
          title: "News Title 2",
          description: "Description for News 2",
          imageUrl: "https://example.com/news2.jpg",
        },
        {
          title: "News Title 3",
          description: "Description for News 3",
          imageUrl: "https://example.com/news2.jpg",
        },
        {
          title: "News Title 3",
          description: "Description for News 3",
          imageUrl: "https://example.com/news2.jpg",
        },
      ];
    

  return (
    <div className='flex flex-warp justify-center mt-3 w-4/5'>
      {
        newsData.map((news, index)=>(
            <NewsCard key={index} 
            title={news.title}
            description={news.description}
            imageUrl={news.imageUrl}
            />
        ))
      }
    </div>
  )
}

export default NewsContainer
