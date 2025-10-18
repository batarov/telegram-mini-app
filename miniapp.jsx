import React, { useEffect, useState } from "react";

const tg = window.Telegram.WebApp;

function MiniApp() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Telegram WebApp готов
    tg.ready();

    // Получаем данные пользователя из Telegram
    setUser(tg.initDataUnsafe.user); // безопасно получить базовые данные пользователя

    // Если нужен доступ к initData — можно проверить подпись
    // (для простоты здесь не реализовано)

  }, []);

  const handleLogout = () => {
    // В Mini App обычно выход — просто очистка локального состояния
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

export default MiniApp;
