const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-DB', () => {

    test('Debe ejecutar el proceso 2 veces', () => {
        syncDB();
        const times = syncDB();
        console.log(`Se llamó ${times} veces`);

        expect(times).toBe(2);
    });

});