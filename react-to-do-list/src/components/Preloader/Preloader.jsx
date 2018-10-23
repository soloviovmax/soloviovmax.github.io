import React from 'react'
import './Preloader.css'

export default function Preloader() {
  return (
    <div className="preloader-wrap">
        <div className="preloader">
          <svg className="circle-wrap" viewBox="25 25 50 50">
              <circle className="circle -first" cx="50" cy="50" r="17" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
              <circle className="circle -first" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
              <circle className="circle -first" cx="50" cy="50" r="23" fill="none" strokeWidth="2" strokeMiterlimit="10"/>
            </svg>
        </div>
    </div>
  );
}
