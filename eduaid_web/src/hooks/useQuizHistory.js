import { useState } from 'react';

export const useQuizHistory = (key = 'last5Quizzes', maxItems = 5) => {
  const [history, setHistory] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      return [];
    }
  });

  const addQuiz = (quizDetails) => {
    setHistory((prevHistory) => {
      const newHistory = [...prevHistory, quizDetails];
      if (newHistory.length > maxItems) {
        newHistory.shift(); 
      }
      try {
        window.localStorage.setItem(key, JSON.stringify(newHistory));
      } catch (error) {
        console.error(error);
      }
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    window.localStorage.removeItem(key);
  };

  return { history, addQuiz, clearHistory };
};