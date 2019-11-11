function withdraw(clients, balances, client, amount) {
    
    for (let i = 0; i < clients.length; i++) {
        if (clients[i] !== client) continue;
        if (balances[i] > amount) {
            balances[i] -= amount;
            return balances[i];
        }
    }
    return -1;
}

