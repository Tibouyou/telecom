import { query } from '../../lib/db';

export default async function handler(req, res) {
    const id = req.body.id;
    
    try {
        const querySql = `SELECT * FROM communes WHERE code_insee = ?`;
        const values = [id]
        const [data] = await query({ query: querySql, values});

        let array = {};
        for (var i = 0; i < data.length; i++) {
            array[data[i].code_dep] = data[i];
        }
        
        res.status(200).json({ results : data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}