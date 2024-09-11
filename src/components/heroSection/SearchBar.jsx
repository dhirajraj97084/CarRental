import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { SeparatorVertical } from 'lucide-react'
import { IoSearch } from "react-icons/io5";
import Data from '@/data/Data';





function SearchBar() {
    return (
        <div className='flex flex-wrap items-center mt-6 gap-4 md:space-x-3  bg-white shadow-md rounded-md md:rounded-full px-3 py-2'>
            <Select>
                <SelectTrigger className="md:w-[180px] outline-none md:border-none md:shadow-none">
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">New</SelectItem>
                    <SelectItem value="dark">Old</SelectItem>

                </SelectContent>
            </Select>
            <SeparatorVertical orientation="vertical" className='hidden md:block' />
            <Select>
                <SelectTrigger className="md:w-[180px] outline-none md:border-none md:shadow-none">
                    <SelectValue placeholder="Car Makes" />
                </SelectTrigger>
                <SelectContent>

                    {Data.carItems.map((item, index) => (
                        <div className="div" key={index}>
                            <SelectItem value={item.name}>{item.name}</SelectItem>
                        </div>
                    ))}
                </SelectContent>
            </Select>
            <SeparatorVertical orientation="vertical" className='hidden md:block' />

            <Select>
                <SelectTrigger className="md:w-[180px] outline-none md:border-none md:shadow-none">
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                    {Data.pricing.map((pri, index) => (
                        <div className="div" key={index}>
                            <SelectItem value={pri.name}>{pri.name}</SelectItem>
                        </div>
                    ))}
                </SelectContent>
            </Select>
            <div className="div mx-auto ">
                <button className='bg-indigo-700   hover:scale-105 hover:transition-all text-white p-3    rounded-full'><IoSearch className='text-2xl' /></button>
            </div>

        </div>
    )
}

export default SearchBar
