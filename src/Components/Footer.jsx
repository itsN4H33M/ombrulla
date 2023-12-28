import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container bg-[#000328]'>
        <div className='text-white grid grid-cols-4 mx-40 py-36'>
          {/* Col 1 */}
          <div>
            <h1 className='text-2xl pb-8'>About Us</h1>
            <p className='text-gray-400 leading-7 pr-1'>Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis. </p>
            <div className='flex justify-start gap-x-8 pt-10 '>
              <Link to={''}><i class="fa-brands fa-facebook fa-lg hover:text-gray-500/75"></i></Link>
              <Link to={''}><i class="fa-brands fa-instagram fa-lg hover:text-gray-500/75"></i></Link>
              <Link to={''}><i class="fa-brands fa-twitter fa-lg hover:text-gray-500/75"></i></Link>
              <Link to={''}><i class="fa-brands fa-linkedin-in fa-lg hover:text-gray-500/75"></i></Link>
              <Link to={''}><i class="fa-brands fa-youtube fa-lg hover:text-gray-500/75"></i></Link>
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <h1 className='text-2xl pb-6'>Our Services</h1>
            <div className='text-gray-400 leading-10 flex flex-col'>
              <Link to={''}>AI Infrastructure Inspection</Link>
              <Link to={''}>AI Visual Inspection</Link>
              <Link to={''}>AI Data Analytics</Link>
              <Link to={''}>AI People Tracking</Link>
            </div>
          </div>
          {/* Col 3 */}
          <div>
            <h1 className='text-2xl pb-6'>Our Solutions</h1>
            <div className='text-gray-400 leading-10 flex flex-col'>
              <Link to={''}>Asset Performance Management</Link>
              <Link to={''}>Job Grading & Evaluation</Link>
              <Link to={''}>Compensation Management</Link>
            </div>
          </div>
          {/* Col 4 */}
          <div>
            <h1 className='text-2xl pb-6'>Reach Us</h1>
            <div className='text-gray-400 leading-7 pr-2'>
              {/* UK */}
              <p >United Kingdom, 53 Denton close</p>
              <p>Redhill, Surrey, RH1 5LB</p>
              <p>+44 787 999 3892</p>
              {/* Germany */}
              <p className='pt-4'>Germany, Schützenstraße 51A</p>
              <p>Lübeck, 23558</p>
              <p>+49 179 512 5812</p>
              {/* India */}
              <p className='pt-4'>India, No. 154/20, Royal Space</p>
              <p>Third Floor TI, HSR Layout,</p>
              <p>Bangalore, Karnataka</p>
              <p>560102</p>
              <p>+91 85900 56435</p>
            </div>
          </div>
        </div>
        <p className='text-xs text-gray-500 pb-1'> &copy; 2020 Ombrulla, Inc. All rights reserved. </p>
      </div>
    </>
  )
}

export default Footer