document.addEventListener('DOMContentLoaded', function () {
    var dangky = document.querySelector('.nut-dangky');
    dangky.addEventListener('click', function () {
        if (CheckInput()) {
            alert("Đăng ký thành công !");
            Reset();
        }
    })

})
function CheckInput() {
    var email = document.getElementById('email');
    var ckemail = document.getElementById('ckemail');
    var sdt = document.getElementById('sdt');
    var cksdt = document.getElementById('cksdt');
    var ten = document.getElementById('txtTen');
    var ckten = document.getElementById('ckten');
    var ho = document.getElementById('txtHo');
    var ckho = document.getElementById('ckho');
    var matkhau = document.getElementById('matkhau');
    var ckmk = document.getElementById('ckmk');
    var nlmatkhau = document.getElementById('nlmatkhau');
    var cknlmk = document.getElementById('cknlmk');
    var flag = true;
    var checkemail = /^([\w\.])+@([a-zA-Z0-9\-]{2,4})+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    var numbers = /^[0-9]+$/;
    var strings = /^[a-zA-Z\s]+$/;
    if (email.value == '' || email.value.search(checkemail) == -1) {
        flag = false;
        email.style.border = "1px solid #eb2f06";
        ckemail.style.color = "#eb2f06";
        if (email.value == '') {
            ckemail.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập email`;
        }
        else
            ckemail.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Email không hợp lệ`;
    }
    else {
        email.style.border = "1px solid #0be881";
        ckemail.innerHTML = "";
    }
    if(sdt.value == '' || sdt.value.search(numbers) == -1 || sdt.value.length != 10) {
        flag = false;
        sdt.style.border = "1px solid #eb2f06";
        cksdt.style.color = "#eb2f06";
        if(sdt.value == '') {
            cksdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số điện thoại`;
        }
        else if(sdt.value.search(numbers) == -1) {
            cksdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số điện thoại không hợp lệ`;
        }
        else
            cksdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số điện thoại phải 10 số`;
    }
    else {
        sdt.style.border = "1px solid #0be881";
        cksdt.innerHTML = "";
    }
    if (ten.value == '' || ten.value.search(strings) == -1) {
        flag = false;
        ten.style.border = "1px solid #eb2f06";
        ckten.style.color = "#eb2f06";
        if (ten.value == '') {
            ckten.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập tên`;
        }
        else
            ckten.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập chữ`;
    }
    else {
        ten.style.border = "1px solid #0be881";
        ckten.innerHTML = "";
    }
    if (ho.value == '' || ho.value.search(strings) == -1) {
        flag = false;
        ho.style.border = "1px solid #eb2f06";
        ckho.style.color = "#eb2f06";
        if (ho.value == '') {
            ckho.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập họ`;
        }
        else
            ckten.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập chữ`;
    }
    else {
        ho.style.border = "1px solid #0be881";
        ckho.innerHTML = "";
    }
    if(matkhau.value == '' || matkhau.value.length < 8) {
        flag = false;
        matkhau.style.border = "1px solid #eb2f06";
        ckmk.style.color = "#eb2f06";
        if(matkhau.value = '') {
            ckmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mật khẩu`;
        }
        else
            ckmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mật khẩu tối thiểu 8 kí tự`;
    }
    else {
        matkhau.style.border = "1px solid #0be881";
        ckmk.innerHTML = "";
    }
    if(nlmatkhau.value == '' || nlmatkhau.value != matkhau.value) {
        flag = false;
        nlmatkhau.style.border = "1px solid #eb2f06";
        cknlmk.style.color = "#eb2f06";
        if(nlmatkhau.value == '') {
            cknlmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập lại mật khẩu`;
        }
        else
            cknlmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mật khẩu không khớp`;
    }
    else {
        nlmatkhau.style.border = "1px solid #0be881";
        cknlmk.innerHTML = "";
    }
    return flag;
}
function Reset() {
    var email = document.getElementById('email');
    var sdt = document.getElementById('sdt');
    var ten = document.getElementById('txtTen');
    var ho = document.getElementById('txtHo');
    var matkhau = document.getElementById('matkhau');
    var nlmatkhau = document.getElementById('nlmatkhau');
    email.value = '';
    sdt.value = '';
    ten.value = '';
    ho.value = '';
    matkhau.value = '';
    nlmatkhau.value = '';
    email.style.border = "1px solid #ccc";
    sdt.style.border = "1px solid #ccc";
    ten.style.border = "1px solid #ccc";
    ho.style.border = "1px solid #ccc";
    matkhau.style.border = "1px solid #ccc";
    nlmatkhau.style.border = "1px solid #ccc";
}