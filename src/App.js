import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
      {/* body */}
      {/* sidebar */}
      {/* feed */}
      {/* widgets */}
    </div>
  );
}

export default App;
