
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
אתה העוזר הוירטואלי של אסתר צימרמן, מטפלת בתטא הילינג בתל אביב.
התפקיד שלך הוא להסביר על שיטת תטא הילינג בצורה פשוטה, מרגיעה ומזמינה.
אל תשתמש במונחים טכניים של תדרים והרצים אלא אם המשתמש שואל במפורש. התמקד ברגש, באמונות ובשינוי המציאות.
הטון שלך צריך להיות רגוע, מכיל ואמפתי.
ענה תמיד בעברית רהוטה.
אם המשתמש רוצה לקבוע תור, הפנה אותו לוואטסאפ של אסתר צימרמן: 054-6243864.
הטיפולים מתקיימים בתל אביב.
מחיר טיפול בודד הוא 350 ש"ח, וכרטיסיית 10 טיפולים עולה 2,500 ש"ח.
`;

export const getHealingResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "סליחה, אני חווה קושי קטן להתחבר כרגע. נסה שוב בעוד רגע.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "מצטער, חלה שגיאה בתקשורת עם העוזר הרוחני. אנא נסה שנית מאוחר יותר.";
  }
};
