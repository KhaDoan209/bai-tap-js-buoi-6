function printNumber() {
  var soChan = new Array();
  var soLe = new Array();
  var noti = document.getElementById("noti-1");
  var noti_2 = document.getElementById("noti-1-2");

  noti.classList = "alert alert-success col-12 mt-3 text-wrap";
  noti_2.classList = "alert alert-success col-12 mt-3 text-wrap";

  for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      soChan.push(" " + i);
    } else {
      soLe.push(" " + i);
    }
  }

  for (var i = 0; i < soChan.length; i++) {
    noti.innerHTML = "👉 Số chẵn: " + soChan;
  }

  for (var i = 0; i < soLe.length; i++) {
    noti_2.innerHTML = "👉 Số lẻ: " + soLe;
  }
}
