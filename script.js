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
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const name = document.getElementById('name').value; // Ambil nama dari dropdown
    const timestamp = new Date().toLocaleString(); // Ambil tanggal dan waktu

    // Menampilkan pesan berhasil di halaman
    document.getElementById('message').innerText = 'Presensi berhasil!';

    // Mengirim data ke Telegram
    const token = '7223485734:AAFkMYa7t8MjtncHCZGXQ69_e_ncJ90mKpU';
    const chatId = '1312023283';
    const message = `${name} kehadiran pukul ${timestamp}`;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => console.error('Error sending message:', error));
});
