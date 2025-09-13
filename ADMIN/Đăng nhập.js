document.addEventListener('DOMContentLoaded', function() {
    var nhomk = document.querySelector('.nhomk');
    var otich = document.querySelector('.otich');
    nhomk.addEventListener('click', function() {
        otich.classList.toggle('dk');
    })
    var mat = document.querySelector('.mat');
    var tk = document.getElementById('tk');
    var mk = document.getElementById('mk');
    mat.addEventListener('click', function() {
        var xm = document.querySelector('.xm');
        mat.classList.toggle('xm');
        if(!xm) {
            mk.attributes[0].value = "text";
        }
        else
            mk.attributes[0].value = "password";
    })
    var nut_dangnhap = document.querySelector('.login');
    nut_dangnhap.addEventListener('click', function() {
        if(CheckTKMK()) {
            this.attributes[0].value = "AdminSP.html";
        }
    })
})
function CheckTKMK() {
    var tk = document.getElementById('tk');
    var mk = document.getElementById('mk');
    var cktk = document.querySelector('.cktk');
    var ckmk = document.querySelector('.ckmk');
    var flag = true;
    if(tk.value == '' || tk.value != 'admin') {
        tk.parentElement.classList.add('error');
        cktk.style.color = "#D93025";
        flag = false;
        if(tk.value == '') {
            cktk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập tài khoản`;
        }
        else
            cktk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Tài khoản không đúng`;
    }
    else
    {   
        tk.parentElement.classList.remove('error');
        cktk.innerHTML = "";
    }
    if(mk.value == '' || mk.value != 'admin') {
        mk.parentElement.classList.add('error');
        ckmk.style.color = "#D93025";
        flag = false;
        if(mk.value == '') {
            ckmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mật khẩu`;
        }
        else
            ckmk.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mật khẩu không đúng`;
    }
    else
    {   
        mk.parentElement.classList.remove('error');
        ckmk.innerHTML = "";
    }
    return flag;
}