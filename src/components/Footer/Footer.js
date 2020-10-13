import React from "react";
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='mt-2 p-5 shadow-md flex justify-between content-start'>
      <p className="text-gray-600 my-auto">OPTIMIDO</p>
      <div className="order-first grid md:block md:order-none text-gray text-center md:divide-x md:divide-gray-400">
        <Link to="/userAgreement/">
          <span className="text-gray-600 mx-2">Пользовательское соглашение</span>
        </Link>
        <Link to="/privacyPolicy/">
          <span className="text-gray-600 mx-2">Политика конфиденциальности</span>
        </Link>
      </div>

      <p className="text-right text-gray-600 my-auto">@ 2020 Optimido</p>
    </div>
  )
}

export default Footer