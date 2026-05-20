// Middleware to verify if the request is during working hours
// Working hours: Monday to Friday, 9 AM to 5 PM

const timeCheck = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday
  const hour = now.getHours();

  // Check if it's a weekday (Monday = 1 to Friday = 5)
  const isWeekday = day >= 1 && day <= 5;
  
  // Check if it's within working hours (9 AM to 5 PM)
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWeekday && isWorkingHour) {
    // Within working hours, proceed to the next middleware
    next();
  } else {
    // Outside working hours, render the closed page
    res.render('close');
  }
};

module.exports = timeCheck;
