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

        const query = `SELECT text FROM test`;
        const values = []
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json({ results: data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}