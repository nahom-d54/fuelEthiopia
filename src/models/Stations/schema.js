import mongoose from 'mongoose'
const stationSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    merchant_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    woreda: {
        type: String,
        required: true
    },
    kebele: {
        type: String,
        default: null // Default value is null
    },
    specific_location: {
        type: String,
        default: null // Default value is null
    },
    city: {
        type: String,
        required: true
    },
    created_at: {
        type: mongoose.Schema.Types.Mixed,
        default: Date.now // Set default to current date
    },
    updated_at: {
        type: mongoose.Schema.Types.Mixed,
        default: Date.now // Set default to current date
    },
    region_id: {
        type: String,
        default: null // Default value is null
    },
    fuel_company_id: {
        type: String,
        default: null // Default value is null
    },
    known_name: {
        type: String,
        default: null // Default value is null
    },
    latitude: {
        type: Number,
        default: null // Default value is null
    },
    longitude: {
        type: Number,
        default: null // Default value is null
    },
    gasoline_price: {
        type: Number,
        required: true
    },
    gasoil_price: {
        type: Number,
        required: true
    },
    kerosene_price: {
        type: Number,
        required: true
    },
    lfo_price: {
        type: Number,
        required: true
    },
    hfo_price: {
        type: Number,
        required: true
    },
    my_updated_at: {
        type: Date,
        default: Date.now
    }
});

export default stationSchema;