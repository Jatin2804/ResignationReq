const Resignation = require('../models/Resignation');
const { sendEmail } = require('./emailService');
const { isHoliday } = require('../utils/calendarHelper');
const User = require('../models/User');

exports.submitResignation = async (employeeId, data) => {
  const { intendedLastWorkingDay, reason } = data;

  console.log("Checking holiday status...");
  const isHolidayOrWeekend = await isHoliday(intendedLastWorkingDay);
  console.log("Holiday check result:", isHolidayOrWeekend);

  if (isHolidayOrWeekend) {
    console.log("🚨 Error: Selected date is a holiday/weekend!");
    throw new Error('Intended last working day is a holiday or weekend.');
  }

  console.log("Date is valid, proceeding with resignation submission.");

  const resignation = new Resignation({
    employee: employeeId,
    intendedLastWorkingDay,
    reason,
  });

  await resignation.save();

  const employee = await User.findById(employeeId);
  if (employee && employee.email) {
    const emailContent = `
      Dear HR,

      Employee ${employee.username} (ID: ${employeeId}) has submitted a resignation request.

      - Intended Last Working Day: ${intendedLastWorkingDay}
      - Reason: ${reason}

      Please review and process this request accordingly. You can visit the application here:
      https://resignationio.vercel.app/login

      Best regards,
      Resignation System
    `;
    await sendEmail(employee.email, 'New Resignation Request', emailContent);
    console.log("Email notification sent.");
  } else {
    console.log("Error: Employee email not found.");
  }

  return resignation;
};

exports.reviewResignation = async (resignationId, data) => {
  const { status, exitDate } = data;
  const resignation = await Resignation.findById(resignationId);

  if (!resignation) throw new Error('Resignation not found.');

  resignation.status = status;
  resignation.exitDate = exitDate;
  await resignation.save();

  // Fetch the employee's email to send the notification
  const employee = await User.findById(resignation.employee);
  if (employee && employee.email) {
    const emailContent = `
      Dear ${employee.username},

      Your resignation request has been ${status}.

      - Exit Date: ${exitDate}

      Please acknowledge this update and complete any necessary exit procedures. You can visit the application here:
      https://resignationio.vercel.app/login

      Best regards,
      HR Department
    `;
    await sendEmail(employee.email, 'Resignation Status Update', emailContent);
  } else {
    console.log("Error: Employee email not found.");
  }

  return resignation;
};

// Service method to fetch all resignations
exports.getAllResignations = async () => {
  try {
    const resignations = await Resignation.find();
    return resignations;
  } catch (error) {
    throw new Error('Error fetching resignations.');
  }
};

exports.getResignationsByEmployer = async (employeeId) => {
  try {
    const resignations = await Resignation.find({ employee: employeeId }, 'intendedLastWorkingDay reason status exitDate');
    return resignations;
  } catch (error) {
    throw new Error('Error fetching resignations by employer ID.');
  }
};
