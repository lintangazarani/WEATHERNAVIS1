async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "128a898991c99190dd0d4455d96a79d8"; // <-- ganti dengan API key kamu sendiri
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  const weatherDiv = document.getElementById("weather");
  weatherDiv.innerHTML = "Memuat...";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Kota tidak ditemukan!");

    const data = await response.json();
    weatherDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].description}</p>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>💧 Kelembapan: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p style="color: yellow;">${error.message}</p>`;
  }
}