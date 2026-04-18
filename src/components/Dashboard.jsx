import React, { useState } from 'react'

export default function Dashboard() {

    const [url,setUrl] = useState("https://placehold.co/200")

  return (
      <div>
          <img src={url} alt="placehold pic" />
    </div>
  )
}
