const KODE_VALID = ["ROAS-123", "ROAS-456"];

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
