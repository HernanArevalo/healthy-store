'use client';
import { titleFont } from '@/config/fonts';
import { useCartStore, useUiStore } from '@/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GiThreeLeaves } from 'react-icons/gi';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
  const openSideMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex justify-center relative">
      <nav className={`${titleFont.className} flex mt-5 p-5 w-full mx-10 rounded-full justify-between items-center bg-white z-10 shadow-lg `}>
        <div className='text-green-600 bg-red'>
          <Link href='/' className="flex flex-row gap-2">
            <span className={`${titleFont.className} antialiased font-bold flex flex-row justify-center items-center`}>
              <GiThreeLeaves size={20}/>
              Healthy
            </span>
            <span> | Shop</span>
          </Link>
        </div>

        {/* Center Menu */}
        <div className='hidden sm:block font-bold  text-lg'>
          <Link
            className='m-2 p-2 rounded-md transition-all text-green-800 hover:text-green-600'
            href='/'
          >
            Products
          </Link>
          <span className="font-normal text-green-800">|</span>
          <Link
            className='m-2 p-2 rounded-md transition-all text-green-800 hover:text-green-600'
            href='/gender/women'
          >
            Posts
          </Link>
          <span className="font-normal text-green-800">|</span>
          <Link
            className='m-2 p-2 rounded-md transition-all text-green-800 hover:text-green-600'
            href='/gender/kids'
          >
            Events
          </Link>
          <span className="font-normal text-green-800">|</span>
          <Link
            className='m-2 p-2 rounded-md transition-all text-green-800 hover:text-green-600'
            href='/gender/kids'
          >
            Contact
          </Link>
        </div>

        <div className='flex items-center gap-1 text-green-800'>
          <Link href='/search' className='m-2'>
            <IoSearchOutline className='w-5 h-5' />
          </Link>
          <Link href={
            ( totalItemsInCart > 0  && loaded )?
            '/cart':
            '/empty'} className='m-2'>
            <div className='relative'>
              {totalItemsInCart > 0 && loaded && (
                <span className='fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white'>
                  {totalItemsInCart}
                </span>
              )}
              <HiMiniShoppingBag className='w-5 h-5' />
            </div>
          </Link>

          <button
            className='m-2 rounded-md transition-all hover:bg-gray-100'
            onClick={openSideMenu}
          >
            Menú
          </button>
        </div>
      </nav>
    </div>
  );
};
