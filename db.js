const pg = require('pg')
const client = new pg.Client(process.env.DATABASE_URL || 'postgress://localhost/batteries_db');

const syncAndSeed = async () => {
    const SQL = `
        DROP TABLE IF EXISTS chemistry;
        DROP TABLE IF EXISTS brand;

        CREATE TABLE brand (
            id INTEGER PRIMARY KEY,
            name VARCHAR(100) NOT NULL
        );

        CREATE TABLE chemistry (
            id INTEGER PRIMARY KEY,
            chem VARCHAR(100) NOT NULL,
            brand_id INTEGER REFERENCES brand(id)
        );

        INSERT INTO brand(id, name) VALUES(1, 'Duracell');
        INSERT INTO brand(id, name) VALUES(2, 'Energizer');
        INSERT INTO brand(id, name) VALUES(3, 'Panasonic');
        INSERT INTO chemistry(id, chem, brand_id) VALUES(1, 'Lithium', 1);
        INSERT INTO chemistry(id, chem, brand_id) VALUES(2, 'NiMH', 2);
        INSERT INTO chemistry(id, chem, brand_id) VALUES(3, 'Alkaline', 3);
    `;

    await client.query(SQL);
};

module.exports = {
    client,
    syncAndSeed
};