import User from "../model/userModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// @desc    Auth user & get token
// @route   POST /api/v1/users/login
// @access  public
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth User ");
});

// @desc    Register a new user
// @route   POST /api/v1/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register User ");
});

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
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
