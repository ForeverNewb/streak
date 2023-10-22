'''
This file contains the Habit class which represents a habit entry.
'''
// Generate a unique ID for each habit
let habitIdCounter = 0;
class Habit {
  constructor(name) {
    this.id = `habit-${++habitIdCounter}`;
    this.name = name;
    this.dates = {};
  }
  // Update the date for a habit
  updateDate(date) {
    if (this.dates[date]) {
      delete this.dates[date];
    } else {
      this.dates[date] = true;
    }
  }
  // Calculate the streak of the habit
  getStreak() {
    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    while (currentDate.toISOString().split('T')[0] in this.dates) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    }
    return streak;
  }
  // Calculate the shade of green based on the streak
  getGreenShade(date, maxStreak) {
    const shade = Math.floor((this.getStreak() / maxStreak) * 7);
    return `rgba(0, ${shade * 36}, 0, 1)`;
  }
}
// Export Habit class
module.exports = Habit;