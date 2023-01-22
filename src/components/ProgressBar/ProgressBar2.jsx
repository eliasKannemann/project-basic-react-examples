import React from 'react'
import clases from'./style.module.css'

function ProgressBar2({ now, label}) {
  return (
    <div className={clases.progressContainer}>
        <span className={clases.bar} style={{width:`${now}%`}}></span>
        <span className={clases.number}>{label}</span>

    </div>
  )
}

export default ProgressBar2