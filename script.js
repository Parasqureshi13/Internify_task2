// ======================================
// MONTHLY / YEARLY TOGGLE
// ======================================

const billingToggle = document.getElementById("billingToggle");

const monthlyLabel = document.getElementById("monthlyLabel");
const yearlyLabel = document.getElementById("yearlyLabel");

const prices = document.querySelectorAll(".price-value");
const periods = document.querySelectorAll(".period");

billingToggle.addEventListener("change", function () {
  const yearly = billingToggle.checked;

  prices.forEach(function (price) {
    if (yearly) {
      price.textContent = price.dataset.yearly;
    } else {
      price.textContent = price.dataset.monthly;
    }
  });

  periods.forEach(function (period) {
    if (yearly) {
      period.textContent = "/month";
    } else {
      period.textContent = "/month";
    }
  });

  if (yearly) {
    monthlyLabel.classList.remove("active-label");
    yearlyLabel.classList.add("active-label");
  } else {
    yearlyLabel.classList.remove("active-label");
    monthlyLabel.classList.add("active-label");
  }
});

// ======================================
// CATEGORY FILTER
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".pricing-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove active class
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add active class
    button.classList.add("active");

    const selectedCategory = button.dataset.filter;

    cards.forEach(function (card) {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// ======================================
// CTA BUTTON MICRO-INTERACTION
// ======================================

const ctaButtons = document.querySelectorAll(".cta-btn");

ctaButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("clicked");

    setTimeout(function () {
      button.classList.remove("clicked");
    }, 180);
  });
});
