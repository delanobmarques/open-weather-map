import React from 'react'

const TimeAndLocation = () => {
  return (
    <>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
                Monday, 18 July 2022 | Local Time: 14:59 PM
            </p>
        </div>

        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
                Halifax, NS
            </p>
        </div>
    </>
  )
}

export default TimeAndLocation;