import React from 'react';
import { useNavigate } from 'react-router-dom';

const HRatingCards = ({ title, rating, position, img ,highlight}) => {
  const navigate=useNavigate()
  return (
     <div
      className={`cursor-pointer relative sm:w-30  md:w-34 md:h-30 lg:h-40 lg:w-54 h-34 h- border-[1px] border-white bg-gradient-to-br from-[#9F009B] to-[#8F00B0] text-white  rounded-xl flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
        highlight ? 'mt-[-90px]  ' : 'mt-0'
      }`}
    onClick={() => navigate('/allapps', {
  state: { category: title ,rating:rating }
})}
>
      {/* Position Badge */}
      <div className="absolute -top-6 font-semibold text-yellow-400 text-3xl">
        #{position}
      </div>

      {/* App Image */}
      <img
        src={img}
      
        className="w-12 h-12 rounded-lg mt-4 object-contain"
      />

      {/* Title */}
      <h2 className="font-bold text-lg text-center">{title}</h2>

      {/* Rating */}
      <p className="text-yellow-300 font-semibold text-sm mt-1">
        {rating} ★ Rating
      </p>
    </div>
  );
};

export default HRatingCards;
