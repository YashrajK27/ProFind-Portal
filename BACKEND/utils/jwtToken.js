//If user logins or registers itself it should directly login to the site
export const sendToken = (user, statusCode, res, message) => {
  const token = user.geJWYToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 //24-hours. 60-min. 60-sec 1000-milsec
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
