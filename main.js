// bài 1
// đầu vào : số nguyên dương n sao cho 1+2+....+n>10000
//         xử lý:tạo ra biến s là tổng của các phần tử sao cho s>10000
document.getElementById("btnSubmit").onclick = function () {
  // tạo biến S giá trị = 0 ở ngoài vòng lặp vì sẽ tích lũy
  // tạo biến n giá trị = 0 ở ngoài vòng lặp vì sẽ tích lũy
  var S = 0;
  var n = 0;
  // nếu tổng vẫn <10000 thì tiếp tục bước nhảy cho n tới khi nào tổng s>10000 thì thoát vòng lặp và in ra số n nhỏ nhất tìm đc để tổng S>10000
  while (S < 10000) {
    // bước nhảy
    n++;
    // thoát vòng lặp khi tổng S+n>10000
    S = S + n;
  }
  // in ra n
  document.getElementById("footerCard").innerHTML = n;
  document.getElementById("footerCard").style.backgroundColor = "#D4EDDA";
};

//bài 2
document.getElementById("btnSubmit2").onclick = function () {
  // input: dom lấy giá trị x và n
  var numX = document.getElementById("X").value;
  var numN = document.getElementById("N").value;
  var i = 0;
  var T = 1;
  var S = 0;
  var content = "";
  for (i = 1; i <= numN; i++) {
    T = T * numX;
    S = S + T;
    content = S;
  }
  document.getElementById("footerCard2").innerHTML = content;
  document.getElementById("footerCard2").style.backgroundColor = "#D4EDDA";
};

//   var i = 1;
//   var T = 1;
//   var S = 0;
//   var tong = tinhTong(S, T);
//   var tich = tinhTich(T, X);
//   while (i <= N) {
//     tich += tich;
//     tong += tong;
//     i++;
//   }
//   console.log(tich);

//   function tinhTich(T, X) {
//     T = T * X;
//     return T;
//   }

//   function tinhTong(S, T) {
//     S = S + T;
//     return S;
//   }
// };

// bài 3
document.getElementById("btnSubmit3").onclick = function () {
  // dom tới thẻ input lấy giá trị đầu vào
  var num = document.getElementById("txtNumber3").value;
  // biết content để lát dom vào thẻ div để xuất kết quả
  var content = "";
  // nếu số nhập vào <0 thì hiển thị error, nếu là 0 thì giai thừa 0 = 1, rồi xét tiếp đk cuối
  if (num < 0) {
    // xuất kq nếu input <0
    document.getElementById("footerCard3").innerHTML =
      "lỗi rồi nhập số khác từ 0 trở lên đi nha má";
  } else if (number === 0) {
    // xuất kq nếu input = 0
    document.getElementById("footerCard3").innerHTML = "1";
  } else {
    // nếu giai thừa >=1 thì tạo vòng lặp
    // tạo biến giai thừa = 1 để tiếp tục xét
    var giaiThua = 1;
    // tạo vòng lặp for với khởi tạo i=1,dk là i<=num, bước nhảy i++ để thoát vòng lặp
    for (i = 1; i <= num; i++) {
      giaiThua *= i;
    }
    // xuất kết quả nếu input >0
    document.getElementById("footerCard3").innerHTML = giaiThua;
  }
  // đổi màu bg cho giống bài mẫu nè
  document.getElementById("footerCard3").style.backgroundColor = "#D4EDDA";
};

// bài 4
// in số
document.getElementById("doiMau").onclick = function () {
  // tạo 10 thẻ div khi click button với khởi tạo x=0; đk x<=9 và bước nhảy x++ để thoát vòng lặp
  // khi thẻ div đc tạo = 9 thì vẫn tiếp tục tạo thẻ div thứ 10, khi đó xét tiếp thì đk fail nên thoát vòng lặp
  for (x = 0; x <= 9; x++) {
    // tạo biến item = tạo thuộc tính thẻ div
    var item = document.createElement("div");
    // tạo id cho thẻ div vừa tạo là Someid
    item.id = "Someid";
    // dom tới thẻ có id item để gán cho nó thẻ con item với thuộc tính và id ở trên vừa tạo
    // để sd cho vòng lặp tiếp theo cho mục đích gán thuộc tính và tên cho thẻ div đc tạo ở trên
    document.getElementById("item").appendChild(item);
    // với khởi tạo i=0, đk i<độ dài của Someid,bước nhảy i++ để thoát khỏi vòng lặp
    for (var i = 0; i < Someid.length; i++) {
      // nếu i chia hết cho 2 thì tạo bg red, color white, tên thẻ là div chẵn
      if ((i + 1) % 2 == 0) {
        Someid[i].style.backgroundColor = "red";
        Someid[i].style.color = "white";
        Someid[i].innerHTML = "div chẵn";
        // nếu i không chia hết cho 2 thì tạo bg blue, color gold, tên thẻ là div lẻ
      } else {
        Someid[i].style.backgroundColor = "blue";
        Someid[i].style.color = "gold";
        Someid[i].innerHTML = "div lẻ";
      }
    }
  }
};
// nháp
// đk for đầu tiên:
// x=0 <9, tạo 1 thẻ div> xét đk x<=9
// x=1 <9 ,tạo 1 thẻ div>xét đk x<=9
// keep going
// đồng thời tạo thêm attribute và tên cho các thẻ trên với vòng lặp for ở dưới
// bài 5
// hàm kiểm tra số nguyên tố
var content = "";
function kiem_tra_snt(n) {
  // Biến cờ hiệu
  var flag = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    flag = false;
  } else if (n == 2) {
    flag = true;
  } else if (n % 2 == 0) {
    flag = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2), khi i>n thì thoát vòng lặp
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}

// Hàm in ra các số nguyên tố từ 1 tới n
function inSoNguyenTo() {
  // Lấy number
  var number = document.getElementById("number").value;

  // Ép number sang kiểu INT
  number = parseInt(number);

  // Lặp để in kết quả
  var content = "";
  for (var i = 1; i <= number; i++) {
    // Nếu là số nguyên tố thì in ra
    if (kiem_tra_snt(i)) {
      content += i + " ";
    }
  }
  document.getElementById("result").innerHTML = content;
  document.getElementById("result").style.backgroundColor = "#D4EDDA";
}
