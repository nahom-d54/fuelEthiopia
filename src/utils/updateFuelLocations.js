import { externalApiRoutes } from "./constants";
import axios from 'axios'
const stations = `${process.env.FUEL_API}/${ externalApiRoutes.stations}`

export const updateFuelLocations = async () => {
    const result = await axios.get(stations)

    return result
}