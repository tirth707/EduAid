import React, { Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Question_Type = lazy(() => import("./pages/Question_Type"));
const Text_Input = lazy(() => import("./pages/Text_Input"));
const Output = lazy(() => import("./pages/Output"));
const Previous = lazy(() => import("./pages/Previous"));
const NotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <HashRouter>
      <Suspense 
        fallback={
          <div className="w-screen h-screen flex justify-center items-center bg-[#02000F]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00CBE7]"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question-type" element={<Question_Type />} />
          <Route path="/input" element={<Text_Input />} />
          <Route path="/output" element={<Output />} />
          <Route path="/history" element={<Previous />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;