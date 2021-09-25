const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Email is invalid");
				}
			},
		},
		password: {
			type: String,
			required: true,
			trim: true,
			minlength: [8, "Password must be greater than 7 characters"],
			validate(value) {
				if (value.toLowerCase().includes("password"))
					throw new Error("Please choose different password...");
			},
		},
		liked: [
			{
				videoID: {
					type: String,
				},
			},
		],
		disliked: [
			{
				videoID: {
					type: String,
				},
			},
		],
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

adminSchema.methods.toJSON = function () {
	const admin = this;
	const adminObject = admin.toObject();

	delete admin.password;
	delete admin.tokens;

	return adminObject;
};

adminSchema.methods.generateAuthToken = async function () {
	const admin = this;
	const token = jwt.sign({ _id: admin._id.toString() }, process.env.JWT_SECRET_ADMIN);
	admin.tokens = admin.tokens.concat({ token });
	await admin.save();
	return token;
};

adminSchema.statics.findByCredentials = async (email, password) => {
	const admin = await Admin.findOne({ email });
	if (!admin) throw new Error("Invaild Crenditials");
	const isMatch = await bcrypt.compare(password, admin.password);
	if (!isMatch) throw new Error("Invaild Crenditials");
	return admin;
};

adminSchema.pre("save", async function (next) {
	const admin = this;

	if (admin.isModified("password")) {
		admin.password = await bcrypt.hash(admin.password, 8);
	}

	next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
