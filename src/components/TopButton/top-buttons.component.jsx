import React from 'react'

const TopButtons = () => {
  const cities = [    
    {
      id: 1,
      title: 'Halifax',
    },
    {
      id: 2,
      title: 'Brasilia',
    },
    {
      id: 3,
      title: 'Sao Luis',
    },
    {
      id: 4,
      title: 'Toronto',
    },
    {
      id: 5,
      title: 'Sao Carlos',
    },
]

  return (
    <div className='flex items-center justify-around my-6'>
      { 
        cities.map((city) => (
          <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
        ))      
      }
    </div>
  )
}

export default TopButtons;