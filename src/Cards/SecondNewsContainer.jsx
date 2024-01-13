import React from 'react';
import BigNewsCard from './BigNewsCard';
import SmallNewsCard from './SmallNewsCard';

const SecondNewsContainer = ({News}) => {

    const smallNewsCards = [
        {
            title: "Place for the title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing el1.32/5 by 800px on Unsplash.",
        },
        {
            title: "Place for the title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing el1.32/5 by 800px on Unsplash.",
        },
        {
            title: "Place for the title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing el1.32/5 by 800px on Unsplash.",
        },
    ];

    return (
        <>
            <h1 className='text-2xl text-green-900 text-center w-4/5 mx-auto mt-14 mb-2'>{News}</h1>
            <p className=' bg-green-500 w-60 h-0.5 mx-auto my-2'></p>
            <div className='flex items-center justify-center'>
                <div className='shadow-xl m-2 p-4 bg-white rounded-md w-4/5 flex'>
                    <BigNewsCard />
                    <div className="flex-1 ml-4 mb-2">
                        {smallNewsCards.map((newsData, index) => (
                            <SmallNewsCard key={index} newsData={newsData} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondNewsContainer;
