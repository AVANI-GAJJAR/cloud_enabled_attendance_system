"use client";
import { useState, useEffect } from "react";
import { Calendar, Badge } from 'rsuite';

const Calendars = (props) => {
    const [datesWithBadges, setDateWithBadges] = useState([]);
    const [leave, setLeave] = useState([]);
    const selectedMonth = props.selectedMonth;
    const selectedYear = props.selectedYear;

    const fetchAbsent = async () => {
        const id = localStorage.getItem("id");
        const API_URL = `http://localhost:8000/api/absent/${id}`;
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${token}`,
                },
            });
            const data = await response.json();
            setDateWithBadges(data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchLeave = async () => {
        const id = localStorage.getItem("id");
        const API_URL = `http://localhost:8000/api/leave/${id}`;
        const token = localStorage.getItem("token");

        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `${token}`,
                },
            });
            const data = await response.json();
            setLeave(data);
        } catch (error) {
            console.error(error);
        }
    }

    const renderCell = (date) => {
        const dateString = date.toISOString().split('T')[0];
        const hasBadge = datesWithBadges.includes(dateString);
        const leaveData = leave.includes(dateString);

        return (
            <div style={{ height: '100%', width: '100%' }}>
                {hasBadge && <Badge content='A' style={{ backgroundColor: 'red', color: 'white', marginTop: 2 }} />}
                {leaveData && <Badge content='L' style={{ backgroundColor: 'red', color: 'white', marginTop: 2 }} />}
            </div>
        );
    };

    useEffect(() => {
        fetchAbsent();
        fetchLeave();
    }, [selectedYear, selectedMonth]);

    // Create a unique key based on selectedYear and selectedMonth
    const calendarKey = `${selectedYear}-${selectedMonth}`;

    return (
        <div style={{ width: 280 }}>
            {/* Set the key prop to force re-render when selectedYear or selectedMonth changes */}
            <Calendar
                key={calendarKey}
                defaultValue={new Date(`${selectedYear}-${selectedMonth}-01`)}
                compact bordered renderCell={renderCell}
            />
        </div>
    );
};

export default Calendars;