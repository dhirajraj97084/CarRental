import FakeData from '@/data/FakeData'
import React from 'react'
import CarItem from './CarItem';

function MostSearchCar() {
    console.log(FakeData.carList);
    return (
        <div>
            <div className="heading">
                <h1 className=' text-center text-3xl font-bold my-5 md:my-8'>Search Most Car</h1>
            </div>
            <div className="aim">
                {FakeData.carList.map((car,index)=>(
                    <CarItem key={index} car={car} />
                ))}
            </div>
        </div>
    )
}

export default MostSearchCar
