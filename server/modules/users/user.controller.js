// const userModel = require("./user.model");
const { encryption, decryption } = require("../../utils/bcrypt");
const { mailler } = require("../../services/nodemailer");
const { checkRole } = require("../../utils/sessionManager");
const { signJWT, otpCode } = require("../../utils/token");
const userModel = require("./user.model");

const createUser = (payload) => {
  return userModel.create(payload);
};

const getAllUsers = async (search, page = 1, limit = 2) => {
  const querry = [];
  if (search?.name) {
    querry.push({
      $match: {
        name: new RegExp(search.name, "gi"),
      },
    });
  }
  if (search?.role) {
    querry.push({
      $match: {
        role: [search.role],
      },
    });
  }

  //sorting
  querry.push({
    $sort: {
      createdAt: 1,
    },
  });

  //pagination

  querry.push(
    {
      $facet: {
        metadata: [
          {
            $count: "total",
          },
        ],
        data: [
          {
            $skip: (+page - 1) * +limit,
          },
          {
            $limit: +limit,
          },
        ],
      },
    },
    {
      $addFields: {
        total: {
          $arrayElemAt: ["$metadata.total", 0],
        },
      },
    },
    {
      $project: {
        total: 1,
        data: 1,
      },
    },
    {
      $project: {
        "data.password": 0,
      },
    }
  );

  const result = await userModel.aggregate(querry);
  // if(!result[0].total[0]) throw new Error("user not found")
  return {
    data: result[0].data,
    total: result[0].total,
    page: +page,
    limit: +limit,
  };
};

const getUserById = (_id) => {
  return userModel.findOne(_id);
};

const updateUsersDetails = (_id, payload) => {
  return userModel.updateOne({ _id }, payload);
};

const deleteUser = (_id) => {
  return userModel.deleteOne({ _id });
};

const registerUser = async (payload) => {
  const { password } = payload;
  // bcrypt the password
  const hashPass = await encryption(password);
  payload.password = hashPass;

  // store payload into the database
  const registeredUsers = await userModel.create(payload);

  // send mail if successfull
  if (!registeredUsers) throw new Error("Registration Failed");
  const { email } = payload;
  const message = mailler(
    email,
    "Registration",
    "You have successfully registered into the system. CONGRATULATIONS!!"
  );
  // else throw new Error("registration failed");
  if (!message) throw new Error("Regsitration Failed");
  return "Registration successfull";
};

const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password)
    throw new Error("Please enter username and password");
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) throw new Error("Email is invalid");
  const { password: hash } = user;
  const comparePassword = decryption(password, hash);
  if (!comparePassword) throw new Error("Password does not matched");
  const userPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = await signJWT(userPayload);

  return token;
};

const generateOTP = async (payload) => {
  const { email } = payload;
  if (!email) throw new Error("please enter email");
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("user does not exists");
  const otp = await otpCode();
  await userModel.updateOne({ email }, { otp });
  mailler(email, "  OTP", `Your otp code is : ${otp}`);
  return "Email is sent ";
};
const verifyOTP = async (payload) => {
  const { email, otp, password } = payload;
  if (!email || !otp || !password)
    throw new Error("something is missing, Please recheck");
  const user = await userModel.findOne({ email });
  const userOtp = user.otp;
  if (otp !== userOtp) throw new Error("Invalid token");
  const hashedPassword = await encryption(password);
  const updatedUser = await userModel.updateOne(
    { email },
    { password: hashedPassword, otp: "" }
  );
  if (!updatedUser) throw new Error("Password update failed");
  return "Password changed successfully";
};

const resetPassword = async (payload) => {
  const { id, newPassword } = payload;
  if (!id || !newPassword) throw new Error("userId or password is missing");
  const user = await userModel.findOne({ _id: id }).select("+password");
  if (!user) throw new Error("user does not found ");
  await userModel.updateOne({ _id: id }, { password: encryption(newPassword) });
  return "Passsword reset Successfully";
};

const changePassword = async (payload) => {
  const { userId, oldPassword, newPassword } = payload;
  if (!userId || !oldPassword || !newPassword)
    throw new Error("Something is missing");
  const user = await userModel.findOne({ _id: userId }).select("+password");
  if (!user) throw new Error("User does not exist ");
  const comparision = decryption(oldPassword, user.password);
  if (!comparision) throw new Error("password doesnot match");

  await userModel.updateOne(
    { _id: user.id },
    { password: encryption(newPassword) }
  );

  return "password changed successfully";
};

const getProfile = (userId) => {
  return userModel.findOne({ _id: userId });
};

const updateProfile = async (userId, payload) => {
  const user = await userModel.findOne({ _id: userId });
  if (!user) throw new Error("User does not exists");
  await userModel.updateOne({ _id: user.id }, payload);
  return "user Updated Successfully";
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUsersDetails,
  deleteUser,
  registerUser,
  loginUser,
  generateOTP,
  verifyOTP,
  resetPassword,
  changePassword,
  getProfile,
  updateProfile,
};
