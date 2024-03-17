const cron = require("node-cron");
const Slot = require("../models/slot");

// Define time ranges
const timeRanges = {
  morning: { start: 6, end: 12 },
  afternoon: { start: 12, end: 18 },
  evening: { start: 18, end: 23 },
  night: { start: 0, end: 6 },
};
cron.schedule(`0 ${timeRanges.morning.end} * * *`, async () => {
  console.log(
    "Morning time has ended. Fetching afternoon, evening, and night slots..."
  );
  await fetchAndDisplaySlots("morning");
});

cron.schedule(`0 ${timeRanges.afternoon.end} * * *`, async () => {
  console.log("Afternoon time has ended. Fetching evening and night slots...");
  await fetchAndDisplaySlots("afternoon");
});

cron.schedule(`59 ${timeRanges.evening.end} * * *`, async () => {
  console.log("Evening time has ended. Fetching night slots...");
  await fetchAndDisplaySlots("evening");
});

cron.schedule(`0 ${timeRanges.night.end} * * *`, async () => {
  console.log(
    "Night time has ended. Fetching morning, afternoon, evening, and night slots..."
  );
  await fetchAndDisplaySlots("night");
});

const fetchAndDisplaySlots = async (selectedDate) => {
  console.log("Selected date:", selectedDate);
  const slots = [];

  for (const timeRange in timeRanges) {
    if (timeRanges.hasOwnProperty(timeRange)) {
      console.log(`Fetching slots for ${timeRange}...`);
      const fetchedSlots = await fetchSlotsFromDatabase(
        timeRange,
        selectedDate
      );
      slots.push(...fetchedSlots);
    }
  }

  return slots;
};
async function fetchSlotsFromDatabase(timeRange, selectedDate) {
  console.log("timeRange:", timeRange);
  console.log("timeRanges:", timeRanges);

  if (!timeRanges.hasOwnProperty(timeRange)) {
    console.error(`Error: '${timeRange}' is not a valid time range.`);
    return [];
  }

  const { start, end } = timeRanges[timeRange];
  const startHour = start;
  const endHour = end;

  const startTime = new Date(selectedDate);
  startTime.setUTCHours(startHour, 0, 0, 0);

  const endTime = new Date(selectedDate);
  endTime.setUTCHours(endHour, 0, 0, 0);

  const slots = await Slot.find({
    startTime: { $gte: startTime },
    endTime: { $lt: endTime },
    date: selectedDate,
  });

  return slots;
}

async function fetchAllSlotsForDate(selectedDate) {
  return await Slot.find({ date: selectedDate });
}

function getTimeFromDate(date, hours) {
  const time = new Date(date);
  time.setHours(hours, 0, 0, 0);
  return time;
}

// Exporting the fetchAndDisplaySlots function for use in other files
module.exports = { fetchAndDisplaySlots };
