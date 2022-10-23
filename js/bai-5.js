function primeNumber() {
  var prime = Number(document.getElementById("prime").value);
  var primeList = "";
  var noti = document.querySelector("#noti-5");

  if (prime == "") {
    noti.classList = "alert alert-danger col-12 mt-3 text-wrap";
    noti.innerHTML = "Vui lòng nhập số";
  } else if (prime < 2) {
    noti.classList = "alert alert-danger col-12 mt-3 text-wrap";
    noti.innerHTML = "Vui lòng nhập giá trị lớn hơn hoặc bằng 2";
  } else {
    noti.classList = "alert alert-success col-12 mt-3 text-wrap";
    debugger;
    for (var i = 1; i < prime; i++) {
      if (isPrime(i)) {
        primeList += " " + i;
      }
    }
    console.log(primeList);
    noti.innerHTML = primeList;
  }
}

function isPrime(number) {
  if (number < 2) return false;

  for (var i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }

  return true;
}
