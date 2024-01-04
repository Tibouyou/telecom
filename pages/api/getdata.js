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

        const query = `SELECT code_dep, SUM(elig_thd1g) as 'elig_thd1g', SUM(elig_thd100) as 'elig_thd100', SUM(elig_thd30) as 'elig_thd30', SUM(elig_bhd8) as 'elig_bhd8', 
        SUM(elig_hd3) as 'elig_hd3', SUM(elig_hd05) as 'elig_hd05', SUM(inel_hd) as 'inel_hd', SUM(nbr) as 'nbr' FROM communes GROUP BY code_dep`;
        const values = []
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        
        let array = {};
        for (var i = 0; i < data.length; i++) {
            array[data[i].code_dep] = data[i];
        }
        
        res.status(200).json({ array });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}