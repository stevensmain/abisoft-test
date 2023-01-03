import React from 'react'
import { deletePlate } from '../services/actions'

const PlatesList = ({ activePlates = [], updateDelete }) => {

    const handleDelete = (id) => {
        deletePlate(id)
            .then(() => updateDelete(id))
            .catch((err) => console.log(`Error: ${err}`))
    }

    return (
        <section className='flex flex-col gap-3 bg-yellow-600 rounded-lg'>
            {
                activePlates.length
                    ? activePlates.map((plate) => {
                        return (
                            <div key={plate._id} className='p-4 flex flex-col gap-2'>
                                <h2>{plate.name}</h2>
                                <p>Color: {plate.color}</p>
                                <span>Precio: {plate.price}</span>
                                <button className='px-4 py-1 bg-red-600 rounded w-fit' onClick={() => handleDelete(plate._id)}>
                                    Eliminar
                                </button>
                            </div>
                        )
                    })
                    : <h2 className='text-2xl text-white'>No hay platos</h2>
            }
        </section>
    )
}

export default PlatesList