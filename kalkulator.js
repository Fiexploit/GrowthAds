// Autentikasi
if (localStorage.getItem("akses_roas") !== "true") {
     window.location.href = "login.html";
}

// Animasi angka
     function animateNumber(el, start, end, duration = 400) {
     const startTime = performance.now();

     function update(time) {
          const progress = Math.min((time - startTime) / duration, 1);
          const value = start + (end - start) * progress;

          el.textContent = Number.isInteger(end)
               ? "Rp " + Math.round(value).toLocaleString("id-ID")
               : value.toFixed(1);

          if (progress < 1) requestAnimationFrame(update);
     }

     requestAnimationFrame(update);
}

// Hitung ROAS
     function hitung() {
     const modal = Number(document.getElementById("modal").value);
     const jual = Number(document.getElementById("jual").value);
     const adminPersen = Number(document.getElementById("admin").value);
     const affiliatePersen = Number(document.getElementById("affiliate").value);

     if (!modal || !jual) {
          alert("⚠️ Mohon masukkan Harga Modal dan Harga Jual dengan benar!");
          return;
     }

     const adminFee = Math.round(jual * adminPersen / 100);
     const affiliateFee = Math.round(jual * affiliatePersen / 100);
     const gross = jual - modal - adminFee - affiliateFee;

     if (gross <= 0) {
          alert("⚠️ Profit negatif, iklan tidak disarankan");
          return;
     }

     const roasImpas = +(jual / gross).toFixed(1);
     const roasMinimal = +(roasImpas * 1.2).toFixed(1); // buffer 20%

     animateNumber(document.getElementById("grossProfit"), 0, gross);
     animateNumber(document.getElementById("roasImpas"), 0, roasImpas);
     animateNumber(document.getElementById("roasMinimal"), 0, roasMinimal);
     }

// Event listener untuk tombol
     document.getElementById("btnHitung").addEventListener("click", hitung);

// Logout
     document.querySelector(".btn-logout").addEventListener("click", () => {
     localStorage.removeItem("akses_roas");
     window.location.href = "login.html";
     });
