const index = (req, res) => {
  res.render("landing");
};

const contact = (req, res) => res.render("contact");

export default { index, contact };
