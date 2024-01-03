import mysql from 'mysql2/promise';

export default async function handler(req, res) {

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "telecom",
        user: "root",
        password: "",
        socketPath: ""
    });
    try {

        const query = `SELECT * FROM communes`;
        const values = []
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        let array = {};
        for (var i = 0; i < data.length; i++) {
            array[data[i].code_insee] = data[i];
        }
        res.status(200).json({ array });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}