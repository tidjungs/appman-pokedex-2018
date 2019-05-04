import React from 'react'
import { Line } from 'rc-progress'

const ProgressBar = ({
  title, percent
}) => (
    <div className="detail-bar">
      <p>{title}</p>
      <Line
        style={{
          width: '80%'
        }}
        percent={percent}
        strokeWidth="10"
        trailWidth="10"
        strokeColor="#f3701a"
        trailColor="#d4d4d4"
      />
    </div>
  )

export default ProgressBar