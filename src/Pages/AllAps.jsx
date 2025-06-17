import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import TradingCards from '../Component/TradingCards';
const AllAps = () => {
    const location = useLocation();
    const [knowMore, setKnowMore] = useState(false)
    const category = location.state?.category || 'Unknown';
    const rating = location.state?.rating || 'Unknown';
    const handleKnowMore = () => {
        if (knowMore) {
            setKnowMore(false)
        }
        else {
            setKnowMore(true)
        }
    }
    const TradingCard = [
        {
            title: "Lottery", rating: "4.7",
            img: "",
            details: "here goes some details of the app"
        },
        {
            title: "Lottery", rating: "4.7",
            img: "",
            details: "here goes some details of the app"
        },
        {
            title: "Lottery", rating: "4.7",
            img: "",
            details: "here goes some details of the app"
        },
        {
            title: "Lottery", rating: "4.7",
            img: "",
            details: "here goes some details of the app"
        },
        {
            title: "Lottery", rating: "4.7",
            img: "",
            details: "The Random Word Generator is a tool to help you create a list of random words. There are many reasons one might be interested in doing this,."
        },

    ]
    return (
        <div className='p-4 flex lg:flex-row sm:flex-col md:flex-col'>
            <div className='flex flex-col  justify-center lg:w-[50%] sm:w-[100%] md:w-[100%] '>
                <img src='' className='rounded-lg w-[90%] h-[200px] m-auto ' />
                <img src='' className='rounded-lg w-16 h-16 relative m-auto top-[-2rem]' />
                <h1 className='text-2xl text-center font-bold text-[#8900C1] relative top-[-2rem]'>{category}</h1>
                <div className='flex  justify-evenly font-semibold relative top-[-1rem]'>
                    <p> <br />{rating} <br />★ Rating</p>
                    <p>151 <br /> mb</p>
                    <p><br />bonus</p>
                </div>
                <div className='flex items-center justify-center gap-1 font-bold '>
                    <button onClick={handleKnowMore} className='rounded-[2rem] font-semibold cursor-pointer px-2 py-[4px] bg-[#E4D8FF] w-[40%]'>Know More</button>
                    <button className='rounded-[2rem] font-semibold cursor-pointer px-2 py-[4px] text-white bg-[#8700BA] w-[40%]'>Download</button>
                </div>
                <div
                    className={`
                   overflow-hidden transition-all duration-500 ease-in-out 
                   ${knowMore ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                   bg-[#F9F2FF] p-4 rounded-xl shadow-md mt-4`}
                >
                    <h2 className="text-2xl font-bold text-[#8900C1] mb-2">Heading 1</h2>
                    <p className="text-lg font-medium  text-gray-700 mb-2">Image 1</p>
                    <p className="text-lg font-medium text-gray-700 mb-2">Pic 1</p>
                    <p className="text-lg font-medium text-gray-700 mb-2">Description 1</p>
                    
                </div>



            </div>
            <div className='lg:w-[50%] sm:w-[100%] md:w-[100%]'>
                <h1 className='text-2xl  font-bold text-[#8900C1]  uppercase'>Related APPS</h1>
                <div className='mt-5  grid grid-cols-2 gap-2'>


                    {TradingCard.map((Item, index) => (
                        <TradingCards title={Item.title}
                            img={Item.img}
                            rating={Item.rating}
                            details={Item.details}
                            compact={false}
                        />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default AllAps