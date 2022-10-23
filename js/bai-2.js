function countSum() {
  var x = Number(document.getElementById("number-x").value);
  var n = Number(document.getElementById("number-n").value);
  var noti = document.querySelector("#noti-2");

  noti.classList = "alert alert-success col-12 mt-3";
  var sum = 0;

  for (var i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  console.log(sum);
  noti.innerHTML = "👉 Tổng x mũ n là: " + sum.toLocaleString();
}
