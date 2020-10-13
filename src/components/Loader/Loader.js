import React from 'react'

function GlobalLoader() {
  return (
    <div className="preloader">
      <div className="preloader__loader">
        <div className="spinner-grow text-danger" role="status" style={{width: '4rem', height: '4rem'}}>
          <span className="sr-only">Загрузка...</span>
        </div>
      </div>
    </div>
  )
}

export default GlobalLoader