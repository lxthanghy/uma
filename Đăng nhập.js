document.addEventListener('DOMContentLoaded', function() {
    var dangnhap  = document.querySelector('.nut-dangnhap');
    dangnhap.addEventListener('click', function() {
        if(CheckInput()) {
            alert("Đăng nhập thành công !");
        }
    })
})
function CheckInput() {
    var taikhoan = document.getElementById('taikhoan');
    var matkhau = document.getElementById('matkhau');
    var cktaikhoan = document.getElementById('cktaikhoan');
    var ckmatkhau = document.getElementById('ckmatkhau');
    var flag = true;
    var checkemail = /^([\w\.])+@([a-zA-Z0-9\-]{2,4})+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    if(taikhoan.value == '' || taikhoan.value.search(checkemail) == -1) {
        taikhoan.style.border = "1px solid red";
        cktaikhoan.style.color = "red";
        flag = false;
        if(taikhoan.value == '') {
            cktaikhoan.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập email`;
        }
        else
            cktaikhoan.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Email không hợp lệ`
    }
    else
    {
        taikhoan.style.border = "1px solid #78e08f";
        cktaikhoan.innerHTML = "";
    }
    if(matkhau.value == '') {
        matkhau.style.border = "1px solid red";
        flag = false;
        ckmatkhau.style.color = "red";
        ckmatkhau.innerHTML =  `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mật khẩu`;
    }
    else {
        matkhau.style.border = "1px solid #78e08f";
        ckmatkhau.innerHTML = "";
    }
    return flag;
}