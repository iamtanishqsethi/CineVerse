const { GoogleGenerativeAI } = require("@google/generative-ai");
const {GEMINI_AI_KEY} = require("./constants");

const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model