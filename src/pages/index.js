import Navbar from '@/components/Navbar';
import useBatteryStatus from '@/hooks/useBatteryStatus';
import useDateDetails from '@/hooks/useDateDetails';
import Head from 'next/head';
import React, { Fragment, useEffect, useState } from 'react'

const Home = () => {

  const today = useDateDetails();

  const [pStates, setPStates] = useState({
    is_lockscreen: true
  })

  const lockScreenHandler = () => {
    setPStates({
      ...pStates,
      is_lockscreen: false
    })
  }

  const apps = [
    {
      icon: '/icons/messenger.svg'
    },
    {
      icon: '/icons/safari.svg'
    },
    {
      icon: '/icons/music.svg'
    },
    {
      icon: '/icons/mail.svg'
    },
    {
      icon: '/icons/calendar.svg'
    },
    {
      icon: '/icons/photos.svg'
    },
    {
      icon: '/icons/notes.svg'
    },

  ]

  const all_apps = [
    {
      name: 'FaceTime',
      icon: '/icons/facetime.svg'
    },
    {
      name: 'Reminders',
      icon: '/icons/reminders.svg'
    },
    {
      name: 'Files',
      icon: '/icons/files.svg'
    },
    {
      name: 'Maps',
      icon: '/icons/maps.svg'
    },
    {
      name: 'Camera',
      icon: '/icons/camera.svg'
    },
    {
      name: 'home',
      icon: '/icons/home.svg'
    },
    {
      name: 'App Store',
      icon: '/icons/app-store.svg'
    },
    {
      name: 'books',
      icon: '/icons/books.svg'
    },
    {
      name: 'Podcasts',
      icon: '/icons/podcasts.svg'
    },
    {
      name: 'TV',
      icon: '/icons/apple-tv.svg'
    },
    {
      name: 'Settings',
      icon: '/icons/settings.svg'
    },
    {
      name: 'Clock',
      icon: '/icons/clock.svg'
    },
    {
      name: 'Weather',
      icon: '/icons/weather.svg'
    },
    {
      name: 'Stocks',
      icon: '/icons/stocks.svg'
    },
    {
      name: 'Find My',
      icon: '/icons/find-my.svg'
    },
    {
      name: 'Freeform',
      icon: '/icons/freeform.svg'
    },
    {
      name: 'Contacts',
      icon: '/icons/contacts.svg'
    },
    {
      name: 'Translate',
      icon: '/icons/translate.svg'
    },
    // {
    //   name: 'Your App',
    //   icon: '/icons/app-placeholder.svg'
    // },
  ]

  return (
    <Fragment>

      <Head>
        <title>
          Mac OS Next
        </title>
      </Head>


      <div className='w-full min-h-screen bg-gray-100 flex flex-col relative'>
        {/* lockscreen */}
        <div
          onClick={lockScreenHandler}
          className={`fixed top-0 left-0 flex flex-col w-full h-screen  ${pStates.is_lockscreen ? '' : '-translate-y-[100%]'} transition-all ease-in-out duration-300 z-20`}>

          <img src="/images/wallpaper.png" alt="wallpaper" className="w-full h-full object-cover" />

          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-start">

            <Navbar />

            <div className='flex flex-col items-center text-center p-10'>

              <p className='text-xl text-white font-medium'>{today?.day.slice(0, 3)} {today?.date.split('/')[0]}</p>
              {/* <h2 className='text-white text-8xl font-semibold'>{today?.time.split(':')[0] + ':' + today?.time.split(':')[1]}</h2> */}
              <h2 className='text-white text-8xl font-semibold'>{today?.time}</h2>

            </div>
          </div>

          <div className='w-full h-4 absolute bottom-0 left-0 flex items-center justify-center'>

            <div className='w-2/12 mx-auto h-1 rounded bg-white' />

          </div>



        </div>

        {/* homescreen */}
        <div
          className={`fixed top-0 left-0 flex flex-col w-full h-screen z-10`}>

          <img src="/images/wallpaper.png" alt="wallpaper" className="w-full h-full object-cover" />

          <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-start">

            <Navbar />

            <div className='w-full grid grid-cols-6 gap-20 p-20'>

              {
                React.Children.toArray(
                  all_apps.map(({ icon, name }, index) => (
                    <button className='flex flex-col items-center gap-2'>
                      <img src={icon} alt={icon} className='w-14 h-14 object-contain' />
                      <p className='text-xs text-white'>{name}</p>
                    </button>
                  ))
                )
              }

            </div>

          </div>

          <div className='absolute bottom-0 left-0 w-full h-32 flex items-center justify-center'>

            <div className='flex items-center justify-center gap-4 bg-white/50 py-4 px-6 rounded-2xl'>

              {
                React.Children.toArray(
                  apps.map(({ icon }, index) => (
                    <button>
                      <img src={icon} alt={icon} className='w-14 h-14' />
                    </button>
                  ))
                )
              }

            </div>

          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Home