document.addEventListener('DOMContentLoaded', () => {
    let balance = 5102;

    const updateBalance = (amount) => {
        balance += amount;
        document.querySelector('.balance').textContent = balance;
    }

    document.getElementById('daily-reward').addEventListener('click', () => {
        updateBalance(100);
        alert('Вы получили ежедневную награду: 100 монет!');
    });

    document.getElementById('daily-cipher').addEventListener('click', () => {
        updateBalance(200);
        alert('Вы решили ежедневный шифр: 200 монет!');
    });

    document.getElementById('combo').addEventListener('click', () => {
        updateBalance(300);
        alert('Вы выполнили комбо: 300 монет!');
    });

    document.getElementById('mini-game').addEventListener('click', () => {
        updateBalance(400);
        alert('Вы сыграли в мини-игру: 400 монет!');
    });

    document.getElementById('hamster').addEventListener('click', () => {
        updateBalance(50);
        alert('Вы заработали 50 монет, нажав на хомяка!');
    });
});
