const express = require("express");
const Admin = require("../models/admin");
const auth = require("../middleware/auth");

const router = new express.Router();

router.post("/admin", async (req, res) => {
	const admin = new Admin(req.body);
	try {
		await admin.save();
		const token = await admin.generateAuthToken();
		res.status(201).send({ admin, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/admin/login", async (req, res) => {
	try {
		const admin = await Admin.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await admin.generateAuthToken();
		res.send({ admin, token });
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post("/admin/logout", auth, async (req, res) => {
	try {
		req.admin.tokens = req.admin.tokens.filter(
			(token) => token.token !== req.token
		);
		await req.admin.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});

router.get("/admin/me", auth, async (req, res) => {
	res.send(req.admin);
});

router.patch("/admin/me", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	try {
		updates.forEach((update) => (req.admin[update] = req.body[update]));
		await req.admin.save();

		res.send(req.admin);
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
