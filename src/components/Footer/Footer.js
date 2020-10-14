import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
      <div className='mt-3 p-3 grid grid-cols-2 md:flex md:justify-between border-t border-opacity-50'>
        <div
          className="mb-3 grid col-span-2 md:block text-gray text-left md:text-center md:divide-x md:divide-gray-400">
          <Link to="/userAgreement/">
            <span className="text-gray-600 mx-2">Пользовательское соглашение</span>
          </Link>
          <Link to="/privacyPolicy/">
            <span className="text-gray-600 mx-2">Политика конфиденциальности</span>
          </Link>
        </div>
        <p className="mb-3 text-left text-gray-600 my-auto md:order-first">OPTIMIDO</p>
        <p className="mb-3 text-right text-gray-600 my-auto">@ 2020 Optimido</p>
      </div>

  )
}

export default Footer


// <div className='mt-2 p-5 flex justify-between content-start w-full'>
//   <p className="text-gray-600 my-auto">OPTIMIDO</p>
//
//   <div className="order-first grid md:block md:order-none w-full text-gray text-center md:divide-x md:divide-gray-400">
//     <Link to="/userAgreement/">
//       <span className="text-gray-600 mx-2">Пользовательское соглашение</span>
//     </Link>
//     <Link to="/privacyPolicy/">
//       <span className="text-gray-600 mx-2">Политика конфиденциальности</span>
//     </Link>
//   </div>
//
//   <p className="text-right text-gray-600 my-auto">@ 2020 Optimido</p>
// </div>