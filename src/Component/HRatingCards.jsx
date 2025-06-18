import React from 'react';
import { useNavigate } from 'react-router-dom';

const HRatingCards = ({ title, rating, position, img ,highlight,Category,second,third,id}) => {
  const navigate=useNavigate()
  return (
     <div
  className={`cursor-pointer relative sm:w-25 md:w-32 md:h-30 lg:h-66 lg:w-62 h-25
              border border-white bg-gradient-to-br from-[#9F009B] to-[#8F00B0]
              text-white rounded-[1rem] lg:rounded-[2rem] flex flex-col items-center justify-center
              shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl
              ${highlight ? 'col-start-2  relative top-[-3rem]' : 'mt-0'}
              ${second ? 'col-start-1 row-start-1' : ''}
              ${third ? 'col-start-3' : ''}`}
  onClick={() => navigate('/allapps', {
    state: { category: Category, rating: rating, id: id }
  })}
>
      {/* Position Badge */}
      <div className="absolute sm:-top-5 lg:-top-11 font-semibold text-yellow-400 text-3xl lg:text-[4rem]">
        #{position}
      </div>

      {/* App Image */}
      <img
        src={img}
      
        className="sm:w-12 sm:h-10 lg:w-32 lg:h-32 rounded-[0.7rem] lg:rounded-[25px] mt-3 object-contain"
      />

      {/* Title */}
      <h2 className="font-semibold lg:text-[1.9rem] sm:text-[15px] text-center uppercase">{title}</h2>

      {/* Rating */}
      <p className="text-yellow-300  sm:text-xs mb-1 lg:text-xl">
        {rating} ★ Rating
      </p>
    </div>
  );
};

export default HRatingCards;
