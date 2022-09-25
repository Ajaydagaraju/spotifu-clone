import React from 'react'
import Baner from '../Images/banner.jpg';
import Check from '../Images/check.jpg';
import {FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'
function Banner() {
  return (
    <div className='banner' >
        <img src={Baner} alt="" className='bannerImage' />

        <div className="content">
            <div className="breadCrump">
                <p>Home <span>/Popular Artist</span></p>
                <i><FaEllipsisH/></i>
            </div>
            <div className="artist">
                <div className="left">
                    <div className="name">
                        <h2>A-Ha</h2>
                        <img src={Check} alt=""  />
                    </div>
                    <p> <i><FaHeadphones/></i> 11,184,1811 <span>Monthly Listners</span>  </p>
                </div>
                <div className="right">
                    <a href="#">Play</a>
                    <a href="#"> <i><FaCheck/></i> Following </a>
                </div>
            </div>
        </div>
        <div className="bottomLayer"></div>
    </div>
  )
}

export {Banner}