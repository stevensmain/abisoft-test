import axios from 'axios'

const domain = 'http://localhost:5000/api'

export const getPlates = async () => {
    const { data } = await axios.get(`${domain}/plates`)
    return data
}

export const deletePlate = async (id) => {
    const { data } = await axios.delete(`${domain}/plates/${id}`)
    return data
}

export const createPlate = async (body) => {
    const { data } = await axios.post(`${domain}/plates/`, body)
    return data
}