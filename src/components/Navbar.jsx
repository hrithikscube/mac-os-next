import React from 'react';
import useDateDetails from '@/hooks/useDateDetails';
import useBatteryStatus from '@/hooks/useBatteryStatus';

const Navbar = () => {
    const today = useDateDetails()
    const battery = useBatteryStatus()

    return (
        <div className='w-full flex items-center justify-between px-4 py-1'>
            <p className='text-xs text-white font-medium'>{today?.time}  {today?.day.slice(0, 3)} {today?.month.slice(0, 3)} {today.date.split('/')[0]}</p>

            <div className='flex items-center gap-2'>

                <button>
                    <img src="/icons/antenna.svg" alt="antenna" className='' />
                </button>
                <button>
                    <img src="/icons/wifi.svg" alt="wifi" className='' />
                </button>
                <button className='flex items-center gap-1'>
                    <p className='text-white text-xs font-medium'>{battery.level * 100}%</p>
                    <img src="/icons/battery.svg" alt="battery" className='' />
                </button>

            </div>
        </div>
    )
}

export default Navbar