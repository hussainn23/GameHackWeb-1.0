import React from 'react'

export const Marquee = () => {
  return (
    <div className="bg-[#6900E0]  overflow-hidden text-white lg:hidden">
      {/* `whitespace-nowrap` prevents line‑breaks */}
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="whitespace-nowrap"
      >
        <span className="mx-8">COLOUR TRADING</span>
        <span className="mx-8">RUMPY GAMES</span>
        <span className="mx-8">COLOUR TRADING</span>
        <span className="mx-8">RUMPY GAMES</span>
        <span className="mx-8">COLOUR TRADING</span>
        <span className="mx-8">RUMPY GAMES</span>
        {/* …repeat as many times as you like */}
      </marquee>
    </div>
  );
};

