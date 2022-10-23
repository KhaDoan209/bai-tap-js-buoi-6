function divPrint() {
  var noti = document.getElementById("noti-4");
  var content = "";

  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      content +=
        '<div style="display:block;background-color:#ff1a1a;height:40px;">Thẻ div chẵn</div>';
    } else {
      content +=
        '<div style="display:block;background-color:#33adff;height:40px;">Thẻ div lẻ</div>';
    }
  }
  noti.innerHTML = content;
}
