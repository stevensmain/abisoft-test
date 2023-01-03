import React from 'react'
import { useForm } from 'react-hook-form'
import { createPlate } from '../services/actions'

const PlateForm = ({ updatePlates }) => {

    const { handleSubmit, register, reset } = useForm()

    const onSubmit = (data) => {
        createPlate(data)
            .then((response) => updatePlates(response))
            .catch((error) => console.log(`Error: ${error}`))
        reset()

    }
    return (
        <section className='bg-yellow-600 rounded-lg p-4'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
                <div className='p-1 flex flex-col'>
                    <label>Nombre</label>
                    <input type="text" {...register('name')} />
                </div>
                <div className='p-1 flex flex-col'>
                    <label>Color</label>
                    <input type="text" {...register('color')} />
                </div>
                <div className='p-1 flex flex-col'>
                    <label>Precio</label>
                    <input type="number" {...register('price')} />
                </div>
                <div className='p-1 flex flex-col'>
                    <label>Adicionales</label>
                    <input type="text" {...register('fields')} />
                </div>
                <div className='p-1 flex flex-col'>
                    <label>Fecha de entrada</label>
                    <input type="date" {...register('start_time')} />
                </div>
                <button className='px-4 py-1 bg-red-600 rounded w-fit' type='submit'>
                    Agregar
                </button>
            </form>
        </section>
    )
}

export default PlateForm