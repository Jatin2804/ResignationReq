const axios = require('axios');

const API_KEY = 'aAgfezEq0Az29vBPnT3YTJmGIxl23ibS';
const BASE_URL = 'https://calendarific.com/api/v2/holidays';

exports.isHoliday = async (dateInput) => {
  try {
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date provided");
    }

    // console.log(`Checking holiday for: ${date.toISOString().split("T")[0]}`);

    const year = date.getFullYear();

    const response = await axios.get(BASE_URL, {
      params: {
        api_key: API_KEY,
        country: 'IN',
        year: year,
      },
    });

    // console.log("Holiday API Response:", JSON.stringify(response.data, null, 2));

    const holidays = response.data.response.holidays || [];
    const isHoliday = holidays.some(
      (holiday) => new Date(holiday.date.iso).toDateString() === date.toDateString()
    );

    const isWeekend = date.getDay() === 0 || date.getDay() === 6;

    console.log(`Is holiday: ${isHoliday}, Is weekend: ${isWeekend}`);

    return isHoliday || isWeekend;
  } catch (error) {
    console.error("Error fetching holidays:", error.response?.data || error.message);
    return false;
  }
};
