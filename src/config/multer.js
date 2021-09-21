const path = require("path");
const crypto = require("crypto");
const multer = require("multer");

module.exports = {
	dest: path.resolve(__dirname, "..", "..", "temp", "uploads"),
	storage: multer.diskStorage({
		destination: (request, file, callback) => {
			callback(null, path.resolve(__dirname, "..", "..", "temp", "uploads"))
		},
		filename: (request, file, callback) => {
			crypto.randomBytes(16, (err, hash) => {
				if (err) callback(err);

				const fileName = `${hash.toString("hex")}-${file.originalname}`;

				callback(null, fileName);
			});
		},
	}),
	limits: {
		fileSize: 2 * 1024 * 1024
	},
	fileFilter: (request, file, callback) => {
		const allowedMimes = [
			"image/jpeg",
			"image/pjpeg",
			"image/png",
			"image/gif"
		];

		if (allowedMimes.includes(file.mimetype)) {
			callback(null, true);
		} else {
			callback(new Error("Invalid File Type."));
		};
	},
};