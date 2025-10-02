const notes = [
  // 🌹 Romantic Love Notes
  "You’re an amazing man 💕",
  "I admire your heart and kindness 🌸",
  "I love being your baby 🥹",
  "I love you so much, my sweet boy ♥️",
  "Being yours is the best part of my life 💖",
  "You’re my forever favorite person 🥰",
  "No one compares to you, my love 🌎",
  "You’re my best friend and my soulmate 💞",
  "XOXO, Joy 💋",

  // ✨ Encouraging & Uplifting Affirmations
  "You’re destined for greatness 🌟",
  "You inspire me more than you know 💕",
  "You’re favored in all that you do ✨",
  "You carry grace and power effortlessly 🌹",
  "Your journey is beautifully unfolding 🌱",
  "You’re a man of endless possibilities 🚀",
  "You shine brighter than any season 🌠",
  "You’re surrounded by favor and love 🫶",
  "You’re a leader, even in quiet ways 🏆",
  "Everything about you makes me proud 💖",
  "You’re a man of excellence in everything you do 🌟",
  "Your presence is powerful and unforgettable ✨",
  "You’re covered in favor and grace 💎",
  "You were made to do great and mighty things 🚀",
  "You’re a king in every sense 👑",

  // 💌 Loving Reminders
  "You are endlessly loved and adored 💌",
  "You’re my safe place and my joy 🏡",
  "Even in silence, I believe in you 🕊️",
  "You’re the best part of my every day 🌸",
  "My heart will always choose you 💍",
  "You’re not just loved, you’re cherished deeply 🤍",
  "With you, I feel at home 🌹",
  "You are my answered prayer and my blessing ✨",
  "You’re my always and my forever 🫶"
];

function getRandomNote() {
  const randomIndex = Math.floor(Math.random() * notes.length);
  return notes[randomIndex];
}

// Show a sweet welcome message automatically
window.onload = () => {
  const noteDisplay = document.getElementById("noteDisplay");
  noteDisplay.textContent = "Hi my love 💖 open this jar anytime you need a reminder of how much you’re loved, cherished, and adored 🫶";
};

document.getElementById("noteButton").addEventListener("click", () => {
  const noteDisplay = document.getElementById("noteDisplay");
  noteDisplay.textContent = getRandomNote();
});
