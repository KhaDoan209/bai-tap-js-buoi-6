function factorialCalculate() {
  var fact = Number(document.querySelector("#factorial").value);
  var noti = document.querySelector("#noti-3");
  noti.classList = "alert alert-success col-12 mt-3";
  var sum = 1;

  for (var i = 1; i <= fact; i++) {
    sum = sum * i;
  }
  noti.innerHTML = "👉 Giai thừa bằng: " + sum.toLocaleString();
}
