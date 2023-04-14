const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log('Inicio de la App');

cron.schedule('0-59/5 * * * * *', syncDB);