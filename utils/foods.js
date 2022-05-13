const fs = require('fs');


const foodList = () => {
    try {
        const data_buffer = fs.readFileSync("./utils/liste.json")
        const data_object = JSON.parse(data_buffer.toString())
        return data_object
    } catch (error) {
        return []
    }
}

module.exports = { foodList: foodList }