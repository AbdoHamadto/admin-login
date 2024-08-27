"use client"

import { useData } from "../store/data";

const This = () => {

  const {state} = useData()

  return(
    <>
    {state && <div className="w-full text-center text-6xl mt-16">This is Admin</div>}
    <div className="w-full text-center text-5xl mt-4">
      this page is all
    </div>
    </>
  )
}

export default This;