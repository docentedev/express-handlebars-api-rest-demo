const pool = require('../connection')
const getAllMusicians = async () => {
    try {
        const result = await pool.query('SELECT * FROM musician')
        return result.rows
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllMusicians
}