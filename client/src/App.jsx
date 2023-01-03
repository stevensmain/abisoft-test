import { useEffect, useState } from "react"
import PlateForm from "./components/PlateForm"
import PlatesList from "./components/PlatesList"
import { getPlates } from "./services/actions"


function App() {

  const [activePlates, setActivePlates] = useState([])

  const deletePlates = (id) => setActivePlates(activePlates.filter(() => plates._id !== id))
  const addPlate = (plate) => setActivePlates([...activePlates, plate])

  useEffect(() => {
    getPlates()
      .then((plates) => {
        const activePlates = plates.filter((plate) => plate.offer !== true)

        setActivePlates(activePlates)
      })
  }, [])

  return (
    <div className="w-screen h-screen bg-gray-200 py-8 px-12 flex gap-3">
      <div className="w-6/12">
        <h1 className="text-2xl text-center text-black">Menu</h1>
        <PlatesList
          activePlates={activePlates}
          updateDelete={deletePlates}
        />
      </div>
      <div className="w-6/12">
        <h1 className="text-2xl text-center text-black">Agregar plato</h1>
        <PlateForm
          updatePlates={addPlate}
        />
      </div>
    </div>
  )
}

export default App
