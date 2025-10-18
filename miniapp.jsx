import React, { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;

function MiniApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    tg.ready();
    setUser(tg.initDataUnsafe.user);
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
        <h2>Пожалуйста, авторизуйтесь через Telegram</h2>
        <p>Откройте Mini App через Telegram, чтобы подтвердить личность.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Добро пожаловать в Mini App!</h1>
      <p>Привет, {user.first_name} {user.last_name || ""}</p>
      <p>Ваш username: @{user.username || "не установлен"}</p>
      <button onClick={handleLogout} style={{ padding: "8px 12px", cursor: "pointer" }}>
        Выйти
      </button>
    </div>
  );
}

// Рендерим компонент в #root
const rootElement = document.getElementById("root");
ReactDOM.render(<MiniApp />, rootElement);
