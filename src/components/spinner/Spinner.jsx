import React from 'react'
import loader from '../../images/loader.gif'
import './spinner.scss'

const Spinner = () => {
  return (
    <>
          <div className="spinner">
               <img src={loader} alt="" />
          </div>
    </>
  )
}

export default Spinner