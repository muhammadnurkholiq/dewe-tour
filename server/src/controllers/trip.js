// import Trip models
const { trip } = require("../../models");

// add Trip
exports.addTrip = async (req, res) => {
    try {
        await trip.create(req.body)

        res.send({
            status: "Success",
            message: "Add trip success"
        })
    } catch (error) {
        console.log(error);

        res.send({
            status: "Failed",
            message: "Server error"
        })
    }
}

// get Trip 
exports.getTrip = async (req, res) => {
    const {id} = req.params

    try {
        let data = await trip.findOne({
            where: {
                id
            }
        });

        res.send({
            status: "Success",
            message: "Add Trip success",
            data
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            status: "Failed",
            message: "Server error"
        })
    }
}

// get all Trip
exports.getTrips = async (req, res) => {
    try {
        let data = await trip.findAll({})

        res.send({
            status: "Success",
            message: "Add Trip success",
            data
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            status: "Failed",
            message: "Server error"
        });

        res.send({
            status: "Success",
            message: "Delete data success"
        })
    }
}

// update Trip 
exports.updateTrip = async (req, res) => {
    const {id} = req.params

    try {
        await trip.update(req.body, {
            where: {
                id
            }
        });
      
        let updatedData = await trip.findOne({
            where: {
                id
            }
        });
      
        updatedData = JSON.parse(JSON.stringify(updatedData));
      
        res.send({
            status: "Success",
            message: "Update user success",
            data: {
                user: updatedData
            }
        })
    } catch (error) {
       console.log(error);

        res.status(500).send({
            status: "Failed",
            message: "Server error"
        })  
    }
}

// delete Trip 
exports.deleteTrip = async (req, res) => {
    const {id} = req.params

    try {
        await trip.destroy({
            where: {
                id
            }
        });
        
        res.send({
            status: "Success",
            message: "Delete data success"
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            status: "Failed",
            message: "Server error"
        })  
    }
}