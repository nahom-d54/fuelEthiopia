import mongoose from 'mongoose'
import * as statics from './statics'
import stationSchema  from './schema';

stationSchema.static(statics);
const Station = mongoose.model(modelNames.Station, stationSchema);


export default Station;