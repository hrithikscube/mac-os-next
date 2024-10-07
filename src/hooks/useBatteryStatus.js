import { useState, useEffect } from 'react';

const useBatteryStatus = () => {
    const [batteryInfo, setBatteryInfo] = useState({
        level: 1,            // Battery level, 1 = 100%
        charging: false,      // Charging status
        chargingTime: 0,      // Time until fully charged (in seconds)
        dischargingTime: 0,   // Time until fully discharged (in seconds)
    });

    useEffect(() => {
        let battery;

        const updateBatteryInfo = (battery) => {
            setBatteryInfo({
                level: battery.level,
                charging: battery.charging,
                chargingTime: battery.chargingTime,
                dischargingTime: battery.dischargingTime,
            });
        };

        const getBatteryDetails = async () => {
            battery = await navigator.getBattery();
            updateBatteryInfo(battery);

            battery.addEventListener('levelchange', () => updateBatteryInfo(battery));
            battery.addEventListener('chargingchange', () => updateBatteryInfo(battery));
            battery.addEventListener('chargingtimechange', () => updateBatteryInfo(battery));
            battery.addEventListener('dischargingtimechange', () => updateBatteryInfo(battery));
        };

        getBatteryDetails();

        return () => {
            if (battery) {
                battery.removeEventListener('levelchange', () => updateBatteryInfo(battery));
                battery.removeEventListener('chargingchange', () => updateBatteryInfo(battery));
                battery.removeEventListener('chargingtimechange', () => updateBatteryInfo(battery));
                battery.removeEventListener('dischargingtimechange', () => updateBatteryInfo(battery));
            }
        };
    }, []);

    return batteryInfo;
};

export default useBatteryStatus;
