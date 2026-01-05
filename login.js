const KODE_VALID = [
     "GA-9XQ7-LM2A",
     "ROAS-F4K9-7QZ",
     "GRW-8M2X-P9LQ",
     "ADS-5QZ7-XM4R",
     "GA-PL9X-7M2Q",
     "R4AS-X7Q9-LM2",
     "GADS-9M7X-'Q2L",
     "RO4S-PLX9-7QM",
     "GA-XM29-Q7LP",
     "GRADS-7Q9X-LM2"
];

const inputKode = document.getElementById("kode");
if (inputKode) inputKode.focus();

function login() {
     if (!inputKode) {
          alert("Input kode tidak ditemukan");
          return;
     }

     const kode = inputKode.value.trim();

     if (kode === "") {
          alert("⚠️ Masukkan kode akses!");
          inputKode.focus();
          return;
     }

     if (KODE_VALID.includes(kode)) {
          localStorage.setItem("akses_roas", "true");
          window.location.href = "kalkulator.html";
     } else {
          alert("❌ Kode salah!");
          inputKode.focus();
     }
}

const btnLogin = document.getElementById("btnLogin");
if (btnLogin) btnLogin.addEventListener("click", login);

if (inputKode) {
     inputKode.addEventListener("keypress", function(e){
          if (e.key === "Enter") login();
     });
}
