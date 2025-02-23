const Resignation = require('../models/Resignation');
const { sendEmail } = require('./emailService');
const { isHoliday } = require('../utils/calendarHelper');

// exports.submitResignation = async (employeeId, data) => {
//   const { intendedLastWorkingDay, reason } = data;
// console.log("Hii")
// console.log("Just chscking before",await isHoliday(intendedLastWorkingDay))
//   if (isHoliday(intendedLastWorkingDay)) {
//     console.log("Yes hoildy from service",await isHoliday(intendedLastWorkingDay))
//     throw new Error('Intended last working day is a holiday or weekend.');
//   }
//  console.log("Check1");
//   const resignation = new Resignation({
//     employee: employeeId,
//     intendedLastWorkingDay,
//     reason,
//   });
//   console.log("Check2");
//   await resignation.save();
//   await sendEmail('hr@example.com', 'New Resignation Request', `Employee ${employeeId} has submitted a resignation request.`);
//   console.log("Check3");
//   return resignation;
// };

exports.submitResignation = async (employeeId, data) => {
    const { intendedLastWorkingDay, reason } = data;
  
    console.log("Checking holiday status...");
    const isHolidayOrWeekend = await isHoliday(intendedLastWorkingDay);
    console.log("Holiday check result:", isHolidayOrWeekend);
  
    if (isHolidayOrWeekend) {
      console.log("🚨 Error: Selected date is a holiday/weekend!");
      throw new Error('Intended last working day is a holiday or weekend.');
    }
  
    console.log("✅ Date is valid, proceeding with resignation submission.");
  
    const resignation = new Resignation({
      employee: employeeId,
      intendedLastWorkingDay,
      reason,
    });
  
    await resignation.save();
    await sendEmail('hr@example.com', 'New Resignation Request', `Employee ${employeeId} has submitted a resignation request.`);
    
    console.log("📩 Email notification sent.");
    return resignation;
  };
  

exports.reviewResignation = async (resignationId, data) => {
  const { status, exitDate } = data;
  const resignation = await Resignation.findById(resignationId);

  if (!resignation) throw new Error('Resignation not found.');

  resignation.status = status;
  resignation.exitDate = exitDate;
  await resignation.save();

  await sendEmail(resignation.employee.email, 'Resignation Status Update', `Your resignation request has been ${status}.`);

  return resignation;
};
