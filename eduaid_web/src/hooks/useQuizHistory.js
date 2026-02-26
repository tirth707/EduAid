import { useState } from "react";

export const useQuizHistory = () => {
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem("quizHistory");
      const parsed = saved ? JSON.parse(saved) : [];
      // CodeRabbit Fix: Validate that the parsed value is an Array
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Error reading quiz history from localStorage:", error);
      return [];
    }
  });

  const addQuiz = (quiz) => {
    try {
      // CodeRabbit Fix: Use functional updater to prevent stale state updates
      setHistory((prevHistory) => {
        const updatedHistory = [quiz, ...prevHistory].slice(0, 5);
        localStorage.setItem("quizHistory", JSON.stringify(updatedHistory));
        return updatedHistory;
      });
    } catch (error) {
      console.error("Error saving quiz to localStorage:", error);
    }
  };

  const clearHistory = () => {
    try {
      localStorage.removeItem("quizHistory");
      setHistory([]);
    } catch (error) {
      console.error("Error clearing history:", error);
    }
  };

  return { history, addQuiz, clearHistory };
};