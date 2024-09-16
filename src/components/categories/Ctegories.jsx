
import React from 'react'
import Data from '@/data/Data';

function Ctegories() {
    return (
        <div>
            <div className="main">
                <div className="heading">
                    <h1 className=' text-center text-3xl font-bold my-5 md:my-8'>Browse By Type</h1>
                </div>
                <div className="items grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 px-4 md:px-24 mb-4 md:mb-8">
                    {Data.categories.map((item, index) => (
                        <div key={index} className="flex justify-center items-center hover:scale-110 transition-all cursor-pointer">
                            <div className="icon  border border-gray-800 py-3 px-5 rounded-xl hover:bg-gray-100 hover:shadow-md  ">
                                <img src={item.icon} alt="img" width={40} height={40} />
                                {item.name}
                            </div>                         
                            
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ctegories
