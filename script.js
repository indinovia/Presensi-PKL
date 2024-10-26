// Token dan Chat ID Telegram
const botToken = "7223485734:AAFkMYa7t8MjtncHCZGXQ69_e_ncJ90mKpU"; // Token bot kamu
const chatId = "1312023283"; // Chat ID kamu

// Mengirim pesan ke Telegram
const sendMessageToTelegram = async (message) => {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    });
    const data = await response.json();
    console.log(data); // Untuk debug
};

// Menangani klik tombol presensi
document.getElementById('attendanceButton').addEventListener('click', () => {
    const userName = "Indi Novia"; // Ganti dengan nama pengguna yang sesuai
    const currentDate = new Date().toLocaleDateString(); // Format tanggal
    const currentTime = new Date().toLocaleTimeString(); // Format waktu

    const message = `Presensi berhasil! Nama: ${userName}, Kehadiran: ${currentDate} pukul ${currentTime}`;
    sendMessageToTelegram(message);

    document.getElementById('message').innerText = "Presensi berhasil!";
});