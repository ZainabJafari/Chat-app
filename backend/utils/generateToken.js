import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // 15 dagar i millisekunder
		httpOnly: true, // Förhindrar åtkomst via klient-sidans script
		sameSite: 'lax', // Eller 'none' om du behöver skicka cookies över olika domäner
		secure: false, // Sätt till true om du använder https även i utveckling
	});
};

export default generateTokenAndSetCookie;
