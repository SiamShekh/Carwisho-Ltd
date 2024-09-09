import { useEffect, useState } from "react";
import { useMyBookingQuery } from '../../components/rtk/Endpoint';

interface BookingData {
    _id: string;
    service: string;
    startTime: string; // "05:00"
    endTime: string; // "06:00"
    date: string; // "2024-06-20"
    isBooked: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const targetData: BookingData = {
    _id: "667365a11715081e8bb70411",
    service: "667364cd1715081e8bb70401",
    startTime: "20:00",
    endTime: "21:00",
    date: "2024-09-09",
    isBooked: "booked",
    createdAt: "2024-06-19T23:11:29.649Z",
    updatedAt: "2024-06-19T23:22:36.381Z",
    __v: 0
};


const Dashboard = () => {
    // const { data, isFetching } = useMyBookingQuery(undefined);
    // console.log(data);
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [countdown, setCountdown] = useState<number | null>(null);

    // Parse startTime, endTime, and date into full Date objects in UTC (Z at the end ensures UTC timezone)
    const startDateTime = new Date(`${targetData.date}T${targetData.startTime}:00Z`);
    const endDateTime = new Date(`${targetData.date}T${targetData.endTime}:00Z`);

    // Update current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);

            // Debugging logs to check the values of currentTime, startDateTime, and endDateTime
            console.log("Current Time:", now.toLocaleString());
            console.log("Start Time:", startDateTime.toLocaleString());
            console.log("End Time:", endDateTime.toLocaleString());

            // If the current time is past the start time, start the countdown
            if (now >= startDateTime && now < endDateTime) {
                console.log("Countdown should start now.");
                const remainingTime = Math.floor((endDateTime.getTime() - now.getTime()) / 1000);
                setCountdown(remainingTime);
            } else if (now >= endDateTime) {
                console.log("Time's up!");
                setCountdown(0); // Time's up
            }
        }, 1000); // 1-second interval

        return () => clearInterval(timer);
    }, [startDateTime, endDateTime]);

    // Format the countdown in minutes and seconds
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    return (
        <div className="min-h-screen mt-28">
            {currentTime < startDateTime ? (
                <h1>Waiting for countdown to start...</h1>
            ) : countdown !== null ? (
                countdown > 0 ? (
                    <h1>Countdown: {formatTime(countdown)}</h1>
                ) : (
                    <h1>Time's up!</h1>
                )
            ) : null}
        </div>
    );
};

export default Dashboard;
