const formInputsAreFilled = (req) => {
  return req.files.image && req.body.title && req.body.content && req.body.description;
};

export default (req, res, next) => {
  if (!formInputsAreFilled(req)) {
    return res.redirect("/posts/new");
  }

  next();
};
