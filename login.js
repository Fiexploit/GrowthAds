const KODE_VALID = [
     "GA-9XQ7-LM82-ZP",
     "RO4S-A7F9-KD2X",
     "GADS-8PZ3-QM91",
     "RXA9-27QF-LZ8K",
     "GRW-FA92-ZXQ7",
     "ADS-9KQ2-PX7M",
     "GROW-7ZQ9-AF2X",
     "RAOS-X29F-Q7ZK",
     "GX-8FQ7-29ZA",
     "GADS-Q9Z7-X2FA"
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
