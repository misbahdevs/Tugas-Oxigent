// === AMBIL ELEMEN ===
const button = document.querySelector("button"),
  username = document.querySelector("input[name=username]"),
  password = document.querySelector("input[name=password]");
button.addEventListener("click", function (e) {
  // === CEK APAKAH INPUT KOSONG ===
  if (username.value == "" && password.value == "") {
    alert("please enter correct username or password");
  }
  // === JIKA HALAMAN REGISTER ===
  if (button.className == "register") {
    let data = [username.value, password.value];
    localStorage.setItem("user", JSON.stringify(data));

    // === JIKA HALAMAN LOGIN ===
  } else if (button.className == "login") {
    let data = JSON.parse(localStorage.getItem("user"));
    if (username.value == data[0] && password.value == data[1]) {
      alert("selamat datang " + data[0]);
      window.location.href = "admin.html";
    }
  }
});
