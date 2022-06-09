import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, MenuIcon, SearchIcon, } from '@heroicons/react/solid';
import { BellIcon, ChatIcon, GlobeIcon, PlusCircleIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
            <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
                <Image objectFit='contain' src='https://links.papareact.com/fqy' layout="fill" />
            </div>
            <div className='flex items-center mx-7 xl:min-w-[300px]'>
                <HomeIcon className='w-5 h-5' />
                <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
                <ChevronDownIcon className='w-5 h-5' />
            </div>
            {/* search box */}
            <form action="" className='flex items-center space-x-2 border-gray-200 border rounded-sm flex-1 bg-gray-100 px-3 py-1'>
                <SearchIcon className='h-6 w-6 text-gray-400' />
                <input className='flex-1 bg-transparent outline-none' type="text" placeholder='search reddit' />
                <button type="submit" hidden></button>
            </form>

            <div className='mx-5 items-center space-x-2 text-gray-500 hidden lg:inline-flex'>
                <SparklesIcon className='icon' />
                <GlobeIcon className='icon' />
                <VideoCameraIcon className='icon' />
                <hr className='border border-gray-100' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <PlusCircleIcon className='icon' />
                <SpeakerphoneIcon className='icon' />
            </div>
            <div className='ml-5 flex items-center lg:hidden'>
                <MenuIcon className='icon' />
            </div>
            {/* signin signout */}
            <div className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
            <div className='flex-shrink-0 w-5 relative h-5'>
                <Image src='https://links.papareact.com/23l' objectFit='contain' layout='fill' alt="" />
            </div>
            <p className='text-gray-400'>Sign In</p>
            </div>
        </div>
    )
}

export default Header
