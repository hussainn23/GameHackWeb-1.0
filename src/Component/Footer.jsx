import React from 'react'
import { FaFacebookF, FaYoutube, FaWhatsapp, FaPinterestP, FaTwitter, FaUser, FaPhone, FaShieldAlt, FaGavel, FaExclamationTriangle } from 'react-icons/fa';

export const Footer = () => {
  return (
  <footer className="bg-[#0042a8] text-white text-center py-6  space-y-4 mt-6">
      {/* Social Media Icons */}
      <div className="flex justify-center flex-wrap gap-3 lg:text-[1.2rem]">
        <a href="https://www.facebook.com/lootearning" target="_blank" className="bg-[#3b5998] flex items-center justify-center p-2 rounded-md sm:w-[50px] lg:w-[55px] border-white border-b-4 hover:border-b-2"><FaFacebookF /></a>
        <a href="https://www.youtube.com/happygoldenlifechannel" target="_blank" className="bg-[#ff0000] flex items-center justify-center p-2 rounded-md sm:w-[50px] lg:w-[55px] border-white border-b-4 hover:border-b-2"><FaYoutube /></a>
        <a href="https://allrummy.app/whatsapp/" target="_blank" className="bg-[#25D366] flex items-center gap-2 p-3 rounded-md font-bold border-white border-b-4 hover:border-b-2"><FaWhatsapp />Follow</a>
        <a href="https://www.pinterest.com/lootearning" target="_blank" className="bg-[#c8232c] flex items-center justify-center p-2 rounded-md sm:w-[50px] lg:w-[55px] border-white border-b-4 hover:border-b-2"><FaPinterestP /></a>
        <a href="https://www.twitter.com/allrummyapp" target="_blank" className="bg-[#1da1f2] flex items-center justify-center p-2 rounded-md sm:w-[50px] lg:w-[55px] border-white border-b-4 hover:border-b-2"><FaTwitter /></a>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center border-b-[1px] border-t-[1px] py-8 border-[#606280] flex-wrap gap-3 lg:text-[2rem] sm:text-[12px]">
        <a href="/aboutus" className="hover:text-zinc-500 font-bold text-white flex w-[30%] justify-center items-center gap-1 border border-white lg:px-3 lg:py-1 rounded-md sm:px-0">
          <FaUser /> About Us
        </a>
        <a href="/contactus" className="hover:text-zinc-500 font-bold text-white flex lg:w-[30%] justify-center items-center gap-1 border border-white px-3 py-1 rounded-md">
          <FaPhone /> Contact Us
        </a>
        <a href="/privacypolicy" className="hover:text-zinc-500 font-bold text-white flex lg:w-[30%] justify-center items-center gap-1 border border-white px-3 py-1 rounded-md">
          <FaShieldAlt /> Privacy Policy
        </a>
        <a href="/termsconditions" className="hover:text-zinc-500 font-bold text-white lg:w-[30%] flex  justify-center items-center gap-1 border border-white px-3 py-1 rounded-md">
          <FaGavel /> Terms & Conditions
        </a>
        <a href="/disclaimer" className="hover:text-zinc-500 font-bold text-white flex w-[30%] justify-center items-center gap-1 border border-white px-3 py-1 rounded-md">
          <FaExclamationTriangle /> Disclaimer
        </a>
      </div>

      {/* DMCA Badge */}
      <div className="flex justify-center items-center gap-1">
      <a href="https://www.dmca.com/Protection/Status.aspx?ID=1e218a7a-b6fa-4654-94d2-13571af14355&amp;refurl=https://www.allrummy.app/about.html" title="DMCA.com Protection Status" class="dmca-badge" target="_blank">
          <img src="https://images.dmca.com/Badges/_dmca_premi_badge_5.png?ID=1e218a7a-b6fa-4654-94d2-13571af14355"  alt="DMCA Protected" className="lg:h-12" />
      </a>
      
        
      </div>

      {/* Copyright */}
      <p className="sm:text-sm lg:text-[3rem]">
        Copyright © <span className="font-bold text-white">AllRummy.<span className="text-[#FFE300]">App</span></span> All Rights Reserved
      </p>
    </footer>
  )
}
