import express from 'express';

import booking_data from '../models/booking_file';

    const deleteBooking = (req, res)=>{
        const bookingToDelete = booking_data.filter(booking => booking.booking_id === parseInt(req.params.booking_id))[0];
        console.log(bookingToDelete);
        if (!bookingToDelete){
            res.status(404).json({
                status:"error",
                error:"The given id not found"
            });
        } else {
            const bookings$ = booking_data.filter(booking => booking.booking_id === parseInt(req.params.booking_id));
            if(!bookings$){
               return res.status(404).json({
                    status:"error",
                    error:"Booking not found"
                })
            }else{
                const index = booking_data.indexOf(bookings$);
                booking_data.splice(index,1);
                return res.status(200).json({
                    status:"success",
                    message:"Booking deleted successfully"
                })
            }
            // if(JSON.stringify(bookings$) !== JSON.stringify(bookings)){
            //         res.status(200).json({
            //         status:"success",
            //         error:"Booking deleted successfully"
            //     });
            //     console.log(JSON.stringify(bookings$));
            //     console.log("=================================================");
            //     console.log(JSON.stringify(bookings));
            // }else{
            //     res.status(500).json({
            //         status:"error",
            //         error:"booking not deleted"
            //     });
            // }
        }
    }


export default deleteBooking;
