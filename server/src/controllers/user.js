// import user models 
const {user} = require("../../models");

// add user 
exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    let data = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    data = JSON.parse(JSON.stringify(data));
    const avatar = data.avatar
      ? process.env.PATH_AVATAR_IMAGES + data.avatar
      : process.env.PATH_AVATAR_IMAGES + "no-photo.jpg";

    const newData = {
      ...data,
      avatar: avatar,
    };

    res.send({
      status: "success",
      data: newData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

// get all user
exports.getUsers = async (req, res) => {
  try {
    let data = await user.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "password"],
      },
    });

    data = JSON.parse(JSON.stringify(data));
    const newData = data.map((item) => {
      const avatar = item.avatar
        ? process.env.PATH_AVATAR_IMAGES + item.avatar
        : process.env.PATH_AVATAR_IMAGES + "no-photo.jpg";

      return {
        id: item.id,
        email: item.email,
        fullname: item.fullname,
        phone: item.phone,
        address: item.address,
        gender: item.gender,
        avatar: avatar,
      };
    });

    res.send({
      status: "success",
      data: newData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server error",
    });
  }
};

// update user
exports.updateUser = async (req, res) => {
  const {id} = req.params

  try {
    await user.update(req.body, {
      where: {
        id
      }
    });

    let updatedData = await user.findOne({
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

// delete user 
exports.deleteUser = async (req, res) => {
  const {id} = req.params

  try {
    await user.destroy({
      where: {
        id
      }
    });

    res.send({
      status: "Success",
      message: "Delete data success"
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server error"
    })
  }
}