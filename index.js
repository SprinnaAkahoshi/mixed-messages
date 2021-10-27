const randomQuotes = [
  "When you become lazy, it's disrespectful to those who believe in you.",
  "Don't be afraid of failure. It teaches you there's room to grow and become better.",
  "Your mistakes do not define you. The truth is they teach you!",
  "Sometimes you don't get what you want because you deserve better.",
  "When you feel like quitting, remember why you started.",
  "Trying to hurt me by bringing up my past is like trying to rob my old house. I don't live there anymore.",
  "You are not behind. Go at your own pace.",
  "Crush your goals in silence. You don't need an audience to achieve greatness.",
  "Stay strong.",
  "Keep your chin up; both of them.",
];

const randomNum = () => Math.floor(Math.random() * randomQuotes.length);
const index = randomNum();

console.log(randomQuotes[index]);
