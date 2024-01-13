import React from 'react'
import NewsCard from './NewsCard';

const NewsContainer = () => {

    const newsData = [
        {
          title: "News Title 1",
          description: "Description for News 1",
          imageUrl: "https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm",
        },
        {
          title: "News Title 1",
          description: "Description for News 1",
          imageUrl: "https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm",
        },
        {
          title: "News Title 1",
          description: "Description for News 1",
          imageUrl: "https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm",
        },
        {
          title: "News Title 1",
          description: "Description for News 1",
          imageUrl: "https://www.researchgate.net/publication/353422038/figure/fig2/AS:1048906112700416@1627090113328/Image-7-4-3-2-5-9-3-11-45-3-0-2-4-0-1-7.ppm",
        },
       
      
      ];
    

  return (
    <div className='flex flex-warp justify-center my-8 mx-4  w-4/5'>
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
