const cron = require('node-cron');

let times = 0;

cron.schedule('0-59/5 * * * * *', () => {
    times++;
    console.log('Tick cada múltiplo de 5 => ', times);
});

console.log('Inicio');