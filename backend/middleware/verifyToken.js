import auth from "../firebase-config.js";

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  console.log("token: ", token);

  try {
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue;
      console.log("Success from verify token");
      return next();
    }
  } catch (e) {
    return res.json({ message: "Internal Error" });
  }
};
