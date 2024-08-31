const zodiac = document.getElementById("Zodiac");
const body = document.body;
const zodiacSignDiv = document.getElementById("zodiac-sign");
const positivityMessageDiv = document.getElementById("positivity-message");

const zodiacData = {
  aries: {
    color: "#fc0303",
    symbol: "♈",
    message: "Embrace your courage today!",
  },
  taurus: {
    color: "#00ff00",
    symbol: "♉",
    message: "Stability brings happiness!",
  },
  gemini: {
    color: "#ffff00",
    symbol: "♊",
    message: "Your versatility shines bright!",
  },
  cancer: {
    color: "#00ffff",
    symbol: "♋",
    message: "Let your intuition guide you!",
  },
  leo: {
    color: "#ff9900",
    symbol: "♌",
    message: "Your confidence is your strength!",
  },
  virgo: {
    color: "#ffccff",
    symbol: "♍",
    message: "Attention to detail leads to success!",
  },
  libra: {
    color: "#ff66cc",
    symbol: "♎",
    message: "Harmony is your natural state!",
  },
  scorpio: {
    color: "#6600cc",
    symbol: "♏",
    message: "Passion drives you forward!",
  },
  sagittarius: {
    color: "#ff3333",
    symbol: "♐",
    message: "Adventure awaits you!",
  },
  capricorn: {
    color: "#6666ff",
    symbol: "♑",
    message: "Your determination is admirable!",
  },
  aquarius: {
    color: "#33ccff",
    symbol: "♒",
    message: "Innovation is your forte!",
  },
  pisces: {
    color: "#33cc33",
    symbol: "♓",
    message: "Empathy connects you with others!",
  },
};

const changeBackground = () => {
  const selectedZodiac = zodiac.value.trim().toLowerCase();
  const data = zodiacData[selectedZodiac];

  if (data) {
    body.style.backgroundColor = data.color;
    zodiacSignDiv.textContent = data.symbol;
    positivityMessageDiv.textContent = data.message;
  } else {
    body.style.backgroundColor = ""; // Reset to default color
    zodiacSignDiv.textContent = ""; // Clear the zodiac sign symbol
    positivityMessageDiv.textContent = ""; // Clear the positivity message
  }
};
