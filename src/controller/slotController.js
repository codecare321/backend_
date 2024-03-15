const cron = require('node-cron');
const Slot = require('../models/slot');





exports.getSlots = async (req, res) => {
    try {
        const selectedDate = new Date(req.query.date);
    
        const today = new Date();
        today.setHours(0,0,0,0);
        
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 6);
      

        if (selectedDate < today || selectedDate > nextWeek) {
            return res.status(400).json({ message: 'Selected date is not within the valid range' });
        }

        let slots = await Slot.find({ date: selectedDate, availability: true }); // Filter out unavailable slots
        const categorizedSlots = {
            morning: [],
            afternoon: [],
            evening: [],
            night: []
        };

        slots.forEach(slot => {
            const slotStartTime = slot.startTime.getHours();
            if (slotStartTime >= 6 && slotStartTime < 12) {
                categorizedSlots.morning.push(slot);
            } else if (slotStartTime >= 12 && slotStartTime < 18) {
                categorizedSlots.afternoon.push(slot);
            } else if (slotStartTime >= 18 && slotStartTime < 21) {
                categorizedSlots.evening.push(slot);
            } else {
                categorizedSlots.night.push(slot);
            }
        });

        res.status(200).json({ message: 'Get slots endpoint', slots: categorizedSlots });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error', err });
    }
}

exports.bookSlot = async(req,res)=>{
    try{
        res.status(200).json({ message: 'Book slot endpoint' });
    }catch(err){
        res.status(500).json({ message: 'Internal server error' ,err});
    }
}
