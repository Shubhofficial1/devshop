import User from "../model/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && user.matchPassword(password)) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout a user
// @route   POST /api/v1/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("user profile ");
});

// @desc    Update user profile
// @route   Put /api/v1/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile ");
});

// @desc    get all users
// @route   GET /api/v1/users/
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users ");
});

// @desc    get user by Id
// @route   GET /api/v1/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id ");
});

// @desc    delete user by Id
// @route   DELETE /api/v1/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user ");
});

// @desc    update user by Id
// @route   PUT /api/v1/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
