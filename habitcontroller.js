'''
This file contains the controller functions for handling habit-related operations.
'''
// Import required modules
const Habit = require('./habit');
// Array to store habits
let habits = [];
// Get all habits
const getHabits = (req, res) => {
  const startDate = new Date(); // Set the start date to today
  const endDate = new Date(startDate); // Set the end date to today
  endDate.setDate(endDate.getDate() + 6); // Add 6 days to the end date
  const dates = getDates(startDate, endDate);
  res.render('index', { habits, dates });
};
// Create a new habit
const createHabit = (req, res) => {
  const { habitName } = req.body;
  const habit = new Habit(habitName);
  habits.push(habit);
  res.redirect('/');
};
// Update a habit
const updateHabit = (req, res) => {
  const { habitId } = req.params;
  const { habitName } = req.body;
  const habit = habits.find((habit) => habit.id === habitId);
  if (habit) {
    habit.name = habitName;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};
// Update habit date
const updateHabitDate = (req, res) => {
  const { habitId, date } = req.params;
  const habit = habits.find((habit) => habit.id === habitId);
  if (habit) {
    habit.updateDate(date);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};
// Function to generate an array of dates between a start and end date
const getDates = (startDate, endDate) => {
  const dates = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    dates.push(currentDate.toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
};
// Export controller functions
module.exports = {
  getHabits,
  createHabit,
  updateHabit,
  updateHabitDate,
};