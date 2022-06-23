const renderHomePage = (req, res) => {
  res.send("renderHomePage");
};

const renderNotesPage = (req, res) => {
  res.send("renderNotesPage");
};

module.export = {
  renderHomePage,
  renderNotesPage,
};
