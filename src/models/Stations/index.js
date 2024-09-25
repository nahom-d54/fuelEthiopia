import mongoose from 'mongoose'

const Station = mongoose.model(modelNames.Station, stationSchema);

export.default = Station