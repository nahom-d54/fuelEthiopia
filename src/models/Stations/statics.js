export const updateStations = async function (stations) {
    const bulkOps = stations.map(station => ({
        updateOne: {
            filter: { id: station.id }, // Assuming 'id' is unique
            update: { 
                $set: { 
                    ...station, 
                    my_updated_at: Date.now()
                }
            },
            upsert: true
        }
    }));

    return await this.bulkWrite(bulkOps);
}