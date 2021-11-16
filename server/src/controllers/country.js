// import country models
const { country } = require("../../models");

// add country
exports.addCountry = async (req, res) => {
    try {
        await country.create(req.body)

        res.send({
            status: "Success",
            message: "Add country success"
        })
    } catch (error) {
        console.log(error);

        res.send({
            status: "Failed",
            message: "Server error"
        })
    }
}

// get country 
exports.getCountry = async (req, res) => {
    const {id} = req.params

    try {
        let data = await country.findOne({
            where: {
                id
            }
        });

        res.send({
            status: "Success",
            message: "Add country success",
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

// get all country
exports.getCountries = async (req, res) => {
    try {
        let data = await country.findAll({})

        res.send({
            status: "Success",
            message: "Add country success",
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

// update country 
exports.updateCountry = async (req, res) => {
    const {id} = req.params

    try {
        await country.update(req.body, {
            where: {
                id
            }
        });
      
        let updatedData = await country.findOne({
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

// delete country 
exports.deleteCountry = async (req, res) => {
    const {id} = req.params

    try {
        await country.destroy({
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