"use client"

export default function ErrorBoundary({error}: {error : Error}) {
  return (
    <div className="h-screen flex justify-center items-center text-red-600">There is an error in page About :  {error.message}</div>
  )
}
