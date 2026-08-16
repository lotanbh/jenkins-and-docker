const greets = [
  "Today is your best day.",
  "You're closer to your goals than yesterday.",
  "Great things start with small actions.",
  "This is a good day to make progress.",
  "You've got everything you need to succeed.",
  "Every step you take moves you forward.",
  "Make today count.",
  "Your future starts with what you do today.",
  "Believe in yourself and all that you are.",
  "Success is the sum of small efforts repeated day in and day out.",
  "You are capable of amazing things.",
  "Don't wait for opportunity. Create it.",
  "Your potential is endless.",
  "The best way to predict the future is to create it.",
  "You are stronger than you think.",
  "Every day is a new beginning.",
  "Your hard work will pay off.",
  "Stay positive, work hard, make it happen.",
  "You are the architect of your own destiny.",
  "Keep pushing forward, no matter what.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only way to do great work is to love what you do.",
  "Don't be afraid to give up the good to go for the great.",
  "You miss 100% of the shots you don't take.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream big and dare to fail.",
  
  
];

function randomGreet() {
  const randomIndex = Math.floor(Math.random() * greets.length);
  return greets[randomIndex];
}

module.exports = { randomGreet, greets };