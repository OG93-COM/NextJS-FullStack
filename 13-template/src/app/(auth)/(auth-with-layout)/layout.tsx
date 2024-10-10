"use client"

import { useState } from "react"

export default function layout({children}:{children:React.ReactNode}) {
  const [state, setState] = useState("");
  const handleClick = (e: any) => {
    setState(e.target.value)
  }

  return (
    <div>
        <input onClick={handleClick} value={state} type="text" placeholder="Write state"/>
        <h2>Authentication Layout</h2>
        {children}
    </div>
  )
}
