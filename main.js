'''
This is the main file of the web app. It handles the initialization of the app and manages the user interactions.
'''
// Import required modules
const express = require('express');
const path = require('path');
const habitController = require('./habitController');
// Create an instance of Express app
const app = express();
// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));
// Set up routes
app.get('/', habitController.getHabits);
app.post('/habits', habitController.createHabit);
app.put('/habits/:habitId', habitController.updateHabit);
app.put('/habits/:habitId/dates/:date', habitController.updateHabitDate);
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});