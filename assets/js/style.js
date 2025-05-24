/* AOS effects */
AOS.init({
    duration: 1000,  // animation duration in milliseconds
    once: true       // whether animation should happen only once - while scrolling down
  });

  
// for download btn in nav bar

const downloadBtn = document.getElementById('downloadBtn');
  const downloadProgress = document.getElementById('downloadProgress');

  downloadBtn.addEventListener('click', () => {
    let width = 0;
    downloadProgress.style.width = '0%';

    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          downloadProgress.style.width = '0%';
        }, 1000);
      } else {
        width += 10;
        downloadProgress.style.width = width + '%';
      }
    }, 100);
  });

// Counter Script for the count section
      function animateCounter(el, endVal, suffix = "") {
        let start = 0;
        let duration = 2000;
        let startTime = null;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          el.textContent = Math.floor(progress * endVal).toLocaleString() + suffix;
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        }

        requestAnimationFrame(step);
      }

      function startCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
          const endVal = parseInt(counter.getAttribute('data-count'));
          const suffix = counter.getAttribute('data-suffix') || "";
          animateCounter(counter, endVal, suffix);
        });
      }

      // Scroll trigger
      let counted = false;
      window.addEventListener('scroll', () => {
        const section = document.querySelector('#count');
        if (!section) return;
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (!counted && sectionTop < windowHeight - 100) {
          counted = true;
          startCounters();
        }
      });

// for service chit traiff image preview

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = modal.querySelector(".custom-close");
  const backdrop = modal.querySelector(".custom-modal-backdrop");
  const downloadBtn = document.getElementById("downloadImage");

  document.querySelectorAll(".eye-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.getAttribute("data-img");
      modalImg.src = imgSrc;
      downloadBtn.href = imgSrc;
      modal.classList.remove("d-none");
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.add("d-none");
    modalImg.src = "";
    document.body.style.overflow = "";
    modalImg.style.transform = "scale(1)";
    modalImg.style.transformOrigin = "center";
    modalImg.style.cursor = "zoom-in";
    zoomed = false;
  };

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !modal.classList.contains("d-none")) {
      closeModal();
    }
  });

  // Zoom functionality with click-point focus
  let zoomed = false;
  modalImg.addEventListener("click", (e) => {
    const rect = modalImg.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const xPercent = (offsetX / modalImg.width) * 100;
    const yPercent = (offsetY / modalImg.height) * 100;

    if (!zoomed) {
      modalImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      modalImg.style.transform = "scale(2.5)";
      modalImg.style.cursor = "zoom-out";
    } else {
      modalImg.style.transformOrigin = "center";
      modalImg.style.transform = "scale(1)";
      modalImg.style.cursor = "zoom-in";
    }
    zoomed = !zoomed;
  });
});

// function for floationg up arrow

 document.getElementById("scrollToTopBtn").addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });