// toast
document.addEventListener("DOMContentLoaded", () => {
  const toast = document.getElementById("devToast");
  if (!toast) return;

  setTimeout(() => {
    toast.classList.add("show");
  }, 500);

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hide");
  }, 7500);
});

// filter
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll("#portfolioTabs button");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (tabButtons.length === 0 || portfolioItems.length === 0) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      portfolioItems.forEach((item) => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// form
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  if (!contactForm || !submitBtn) return;

  const alertSuccess = document.getElementById("alertSuccess");
  const alertError = document.getElementById("alertError");
  const alertWarning = document.getElementById("alertWarning");
  const inputFields = ["name", "email", "phone", "subject", "message", "agree"];

  function showAlert(alertElement) {
    [alertSuccess, alertError, alertWarning].forEach((a) =>
      a.classList.add("d-none")
    );
    alertElement.classList.remove("d-none");
    setTimeout(() => {
      alertElement.classList.add("d-none");
    }, 5000);
  }

  function checkFormValidity() {
    submitBtn.disabled = !contactForm.checkValidity();
  }

  inputFields.forEach((id) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.addEventListener("input", checkFormValidity);
    element.addEventListener("change", checkFormValidity);
  });

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      showAlert(alertWarning);
      return;
    }

    try {
      setTimeout(() => {
        showAlert(alertSuccess);
        contactForm.reset();
        contactForm.classList.remove("was-validated");
        submitBtn.disabled = true;
      }, 800);
    } catch (error) {
      showAlert(alertError);
    }
  });

  submitBtn.disabled = true;
});