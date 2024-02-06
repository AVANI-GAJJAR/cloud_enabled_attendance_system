"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import {  Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@mui/material'; // Material UI components
import Loading from "../../../loading"
import Link from 'next/link';


const Last = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        const token = localStorage.getItem("token");
        const companyCode = localStorage.getItem("companyCode");
        const response = await fetch(`http://localhost:8000/api/lastFiveDaysAttendance/${companyCode}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        setData(result);
        console.log(result);
        setLoading(false); // Set loading to false when data is fetched
    }
    useEffect(() => {
        fetchData();
    }, []);
    const renderItems = () => {
        const items = [];
        for (let i = 0; i < data.length; i++) {
            const datas = data[i];
            const date = new Date(datas.date);
            
            items.push(
                <TableRow key={datas.id} className='bg-[#eee]'>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell><Link href={`/admin/attendance/${datas.date}`}>{datas.date}</Link></TableCell>
                    <TableCell>{datas.total_users}</TableCell>
                    <TableCell>{datas.present_users}</TableCell>
                    <TableCell>{datas.percentage_present}%</TableCell>
                </TableRow>
            );
        }
        
        return items;
    };

    return (
        <>
            <div style={{ padding: '24px' }}>
                <h1 className='pb-4 font-semibold text-xl'>Last 5 Day's Attendance</h1>
            </div>
            {
                loading ? <div className='flex justify-center items-center h-64'><Loading /></div> :
                    <div className='flex flex-col lg:w-[60%] pl-6'>
                        <div className='overflow-x-auto'>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Total Employees</TableCell>
                                        <TableCell>Total Present Employees</TableCell>
                                        <TableCell>Attendance</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {renderItems()}
                                </TableBody>
                            </Table><br></br>
                        </div>
                    </div>
            }
        </>
    );
}

export default Last