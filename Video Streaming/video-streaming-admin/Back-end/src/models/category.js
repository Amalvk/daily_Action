const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		id:{
			type:Number,
			unique: true,
			required :true
		},
		
	},
	{
		timestamps: true,
	}
);
 

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
