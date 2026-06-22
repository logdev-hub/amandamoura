document.querySelectorAll(".nav-link, .number-button, .footer-nav a, .page-nav-button").forEach((link) => {
  link.addEventListener("click", () => {
    const navCollapse = document.querySelector(".navbar-collapse.show");
    if (navCollapse) {
      const collapseInstance = bootstrap.Collapse.getInstance(navCollapse);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    }
  });
});
