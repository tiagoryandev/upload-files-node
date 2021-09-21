const express = require("express");
const multer = require("multer");

const multerConfig = require("./config/multer");
const router = express.Router();

router.get("/", (request, response) => {
	return response.json({
		api: {
			sendFile: {
				router: "/posts",
				method: "POST",
				type: "Single File",
				request: {
					file: "You File"
				}
			}
		}
	});
});

router.post("/posts", multer(multerConfig).single("file"), (request, response) => {
	return response.json(request.file);
});

module.exports = router;