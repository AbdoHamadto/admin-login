"use client"

import Link from "next/link";
import { useData } from "../store/data";

const Log = () => {

  const {admin, normal} = useData()

  return(
    <>
    <div className="flex w-full justify-around mt-16">
      <Link href='/'>
        <button onClick={admin} className="text-6xl p-4 rounded-full bg-blue-600"> Admin </button>
      </Link>
      <Link href='/'>
        <button onClick={normal} className="text-6xl p-4 rounded-full bg-red-600"> Normal </button>
      </Link>
    </div>
    </>
  )
}

export default Log;