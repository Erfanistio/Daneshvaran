(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9601eae9502dd114',t:'MTc1MjY3MzI5MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Mobile menu toggle functionality
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll("#mobileMenu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

const teacherData = {
  teacher1: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher2: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher3: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher4: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher5: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher6: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher7: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher8: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher9: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
  teacher10: {
    name: "lorem ipsum",
    bio: "Dolor deserunt Lorem fugiat id sint officia occaecat nisi excepteur consectetur consequat exercitation.",
  },
};

function openModal(id) {
  const modal = document.getElementById("teacherModal");
  document.getElementById("modalName").textContent = teacherData[id].name;
  document.getElementById("modalBio").textContent = teacherData[id].bio;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("teacherModal");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
}

  const dropdown = document.getElementById("customDropdown");
  const optionsList = document.getElementById("optionsList");
  const selectedValue = document.getElementById("selectedValue");
  const hiddenInput = document.getElementById("hiddenGrade");

  let isOpen = false;

  function toggleDropdown() {
    isOpen = !isOpen;
    if (isOpen) {
      optionsList.classList.remove("opacity-0", "pointer-events-none", "-translate-y-2");
      optionsList.classList.add("opacity-100", "translate-y-0");
      dropdown.setAttribute("aria-expanded", "true");
    } else {
      optionsList.classList.add("opacity-0", "pointer-events-none", "-translate-y-2");
      optionsList.classList.remove("opacity-100", "translate-y-0");
      dropdown.setAttribute("aria-expanded", "false");
    }
  }

  dropdown.addEventListener("click", toggleDropdown);

  optionsList.querySelectorAll("li").forEach(option => {
    option.addEventListener("click", () => {
      selectedValue.textContent = option.textContent;
      hiddenInput.value = option.textContent;
      toggleDropdown();
    });
  });

  // بسته شدن دراپ‌داون هنگام کلیک بیرون
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !optionsList.contains(e.target)) {
      if (isOpen) toggleDropdown();
    }
  });


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("studentForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://script.google.com/macros/s/AKfycXXXXXX/exec", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      alert("اطلاعات با موفقیت ارسال شد!");
      form.reset();
    } else {
      alert("خطا در ارسال اطلاعات!");
    }
  });
});


