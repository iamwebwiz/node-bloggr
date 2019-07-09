const index = (req, res) => {
  res.render("landing");
};

const contact = (req, res) => res.render("contact");

module.exports = {
  index,
  contact
};
