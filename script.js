'''
This file contains the client-side JavaScript code for handling user interactions.
'''
// Function to update habit date
const updateHabitDate = (habitId, date) => {
  fetch(`/habits/${habitId}/dates/${date}`, { method: 'PUT' })
    .then((response) => {
      if (response.ok) {
        location.reload();
      } else {
        console.error('Failed to update habit date');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};