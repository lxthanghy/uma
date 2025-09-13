document.addEventListener('DOMContentLoaded', function () {
    //xử lý click vào phần ngôn ngữ
    var ngonngu = document.querySelector('.ngonngu');
    var ngonnguhr = ngonngu.querySelector('.layer_ngonngu');
    ngonngu.addEventListener('click', function () {
        ngonnguhr.classList.toggle('nnhr');
    })

    //xử lý nút back to top
    var lendau = document.querySelector('.lendau');
    lendau.addEventListener('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    })


    //xử lý khi click xóa
    var nutxoas = document.getElementsByClassName('xoa');
    for (var i = 0; i < nutxoas.length; i++) {
        var nut_xoas = nutxoas[i];
        nut_xoas.addEventListener('click', Delete);
    }
    //xử lý khi click sửa
    UpdateSTT();
    var nutsuas = document.getElementsByClassName('sua');
    var nut_huy = document.querySelectorAll('.nut_huy');
    var nut_close = document.querySelectorAll('.cls');
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    var form_them = document.querySelector('.form_them');
    var nut_sua = document.querySelector('.nut_sua');
    var nut_them = document.querySelector('.nutthem');
    var nutthem = document.querySelector('.nut_them');
    for (var i = 0; i < nutsuas.length; i++) {
        var nut_suas = nutsuas[i];
        nut_suas.addEventListener('click', ClickUpdate);
    }
    nut_them.addEventListener('click', function () {
        nenden.classList.add('ndhr');
        form_them.classList.add('themhr');
    })
    nutthem.addEventListener('click', Them);
    nut_sua.addEventListener('click', Update);
    for (var i = 0; i < nut_close.length; i++) {
        nut_close[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
        })
    }
    for (var i = 0; i < nut_huy.length; i++) {
        nut_huy[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
        })
    }
    nenden.addEventListener('click', function () {
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        form_them.classList.remove('themhr');
    })

    //xử lý phần tìm kiếm
    var nuttk = document.getElementById('nuttk');
    nuttk.addEventListener('click', Timkiem);

    //xử lý phần thông báo
    var thongbaothem = document.querySelector('.thongbaothem');
    var thongbaosua = document.querySelector('.thongbaosua');
    var thongbaoxoa = document.querySelector('.thongbaoxoa');
    var nutx_thongbaot = thongbaothem.querySelector('i');
    nutx_thongbaot.addEventListener('click', function () {
        thongbaothem.classList.remove('tbhr');
    })
    var nutx_thongbaos = thongbaosua.querySelector('i');
    nutx_thongbaos.addEventListener('click', function () {
        thongbaosua.classList.remove('tbhr');
    })
    var nutx_thongbaox = thongbaoxoa.querySelector('i');
    nutx_thongbaox.addEventListener('click', function () {
        thongbaoxoa.classList.remove('tbhr');
    })
    //Tự động xóa thông báo
    Tudongxoatb();
    UpdateSoLuong();
})
function Them() {
    var nenden = document.querySelector('.nenden');
    var form_them = document.querySelector('.form_them');
    //xử lý phần thông báo
    // KtraThem();
    var txtMa = document.getElementById('maThem');
    var txtTen = document.getElementById('tenThem');
    var txtNgaysinh = document.getElementById('ngaysinhThem');
    var txtDiachi = document.getElementById('diachiThem');
    var txtSdt = document.getElementById('sdtThem');
    var txtEmail = document.getElementById('emailThem');
    if (Check_InputThem()) {
        var txtGioitinh = Check_GioitinhThem();
        var thongbaothem = document.querySelector('.thongbaothem');
        var nhieuitem = document.querySelector('.nhieuitem');
        var it_Them = document.createElement('tr');
        var content_it = `
        <td></td>
        <td>${txtMa.value}</td>
        <td>${txtTen.value}</td>
        <td>${txtNgaysinh.value}</td>
        <td>${txtGioitinh}</td>
        <td>${txtDiachi.value}</td>
        <td>${txtSdt.value}</td>
        <td>${txtEmail.value}</td>
        <td>
        <a href="#" class="sua"><img src="IMAGES/edit.png" alt=""></a>
        <a href="#" class="xoa"><img src="IMAGES/delete.png" alt=""></a>
        </td>`;
        it_Them.innerHTML = content_it;
        nhieuitem.append(it_Them);
        nenden.classList.remove('ndhr');
        form_them.classList.remove('themhr');
        it_Them.querySelector('.sua').addEventListener('click', ClickUpdate);
        it_Them.querySelector('.xoa').addEventListener('click', Delete);
        UpdateSTT();
        UpdateSoLuong();
        thongbaothem.classList.add('tbhr');
        txtMa.value = "";
        txtTen.value = "";
        txtNgaysinh.value = "";
        txtDiachi.value = "";
        txtSdt.value = "";
        txtEmail.value = "";
    }
}

function ClickUpdate(event) {
    var nut_suas = event.target;
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    nenden.classList.add('ndhr');
    form_sua.classList.add('suahr');
    Reset();
    var tr = nut_suas.parentElement.parentElement.parentElement;
    var txtMa = document.getElementById('maSua');
    var txtTen = document.getElementById('tenSua');
    var txtNgaysinh = document.getElementById('ngaysinhSua');
    var txtDiachi = document.getElementById('diachiSua');
    var txtSdt = document.getElementById('sdtSua');
    var txtEmail = document.getElementById('emailSua');
    var td = tr.querySelectorAll('td');
    txtMa.value = td[1].innerText;
    txtTen.value = td[2].innerText;
    txtNgaysinh.value = td[3].innerText;
    txtDiachi.value = td[5].innerText;
    txtSdt.value = td[6].innerText;
    txtEmail.value = td[7].innerText;
    tr.classList.add('it_update');
}
function Update() {
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    var tr_update = document.querySelector('.it_update');
    var td_update = tr_update.querySelectorAll('td');
    var thongbaosua = document.querySelector('.thongbaosua');
    var txtMa = document.getElementById('maSua');
    var txtTen = document.getElementById('tenSua');
    var txtNgaysinh = document.getElementById('ngaysinhSua');
    var txtGioitinh = Check_GioitinhSua();
    var txtDiachi = document.getElementById('diachiSua');
    var txtSdt = document.getElementById('sdtSua');
    var txtEmail = document.getElementById('emailSua');
    if (Check_InputSua()) {
        td_update[1].innerText = txtMa.value;
        td_update[2].innerText = txtTen.value;
        td_update[3].innerText = txtNgaysinh.value;
        td_update[4].innerText = txtGioitinh;
        td_update[5].innerText = txtDiachi.value;
        td_update[6].innerText = txtSdt.value;
        td_update[7].innerText = txtEmail.value;
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        thongbaosua.classList.add('tbhr');

    }
}
function Delete(event) {
    var nut_xoas = event.target;
    var thongbao = confirm('Bạn có thực sự muốn xóa ?');
    var thongbaoxoa = document.querySelector('.thongbaoxoa');
    if (thongbao) {
        this.parentElement.parentElement.remove();
        thongbaoxoa.classList.add('tbhr');
        UpdateSoLuong();
    }
    else
        return;
    UpdateSTT();
}
function Reset() {
    var nutsuas = document.getElementsByClassName('sua');
    for (var i = 0; i < nutsuas.length; i++) {
        var tr = nutsuas[i].parentElement.parentElement;
        tr.classList.remove('it_update');
    }
}
function UpdateSTT() {
    var items = document.querySelectorAll('tbody tr');
    for (var i = 0; i < items.length; i++) {
        var tdstts = items[i].querySelectorAll('td');
        tdstts[0].innerHTML = i + 1;
    }
}
function Tudongxoatb() {
    var thoigian = setInterval(function () {
        var thongbaothem = document.querySelector('.thongbaothem');
        var thongbaosua = document.querySelector('.thongbaosua');
        var thongbaoxoa = document.querySelector('.thongbaoxoa');
        thongbaothem.classList.remove('tbhr');
        thongbaosua.classList.remove('tbhr');
        thongbaoxoa.classList.remove('tbhr');
    }, 4900)
}
function Timkiem(event) {
    var nuttk = event.target;
    var otimkiem = document.getElementById('otimkiem');
    var all_item = document.querySelector('.nhieuitem');
    var all_tr = all_item.querySelectorAll('tr');
    var str_timkiem = otimkiem.value;
    str_timkiem = str_timkiem.toLowerCase();
    for (var i = 0; i < all_tr.length; i++) {
        var all_td = all_tr[i].querySelectorAll('td');
        var tmp = all_td[2].innerText;
        tmp = tmp.toLowerCase();
        if (tmp.indexOf(str_timkiem) == -1) {
            all_tr[i].classList.add('andi');
        }
    }
    otimkiem.addEventListener('change', function () {
        if (otimkiem.value == '') {
            for (var i = 0; i < all_tr.length; i++) {
                all_tr[i].classList.remove('andi');
            }
        }
    })
}
function UpdateSoLuong() {
    var sosanpham = document.querySelector('.slsp');
    var all_item = document.querySelector('.nhieuitem');
    var all_tr = all_item.querySelectorAll('tr');
    sosanpham.innerText = all_tr.length;
}
function Check_InputThem() {
    var txtMa = document.getElementById('maThem');
    var txtTen = document.getElementById('tenThem');
    var txtNgaysinh = document.getElementById('ngaysinhThem');
    var txtGioitinh = Check_GioitinhThem();
    var txtDiachi = document.getElementById('diachiThem');
    var txtSdt = document.getElementById('sdtThem');
    var txtEmail = document.getElementById('emailThem');
    var ckthem_ma = document.querySelector('.ckthem_ma');
    var ckthem_ten = document.querySelector('.ckthem_ten');
    var ckthem_ngaysinh = document.querySelector('.ckthem_ngaysinh');
    var ckthem_gioitinh = document.querySelector('.ckthem_gioitinh');
    var ckthem_diachi = document.querySelector('.ckthem_diachi');
    var ckthem_sdt = document.querySelector('.ckthem_sdt');
    var ckthem_email = document.querySelector('.ckthem_email');
    var numbers = /^[0-9]+$/;
    var checkemail = /^([\w\.])+@([a-zA-Z0-9\-]{2,4})+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    var flag = true;
    if (txtMa.value == '' || !Check_MaTrung(txtMa.value)) {
        txtMa.classList.add('error');
        flag = false;
        ckthem_ma.style.color = "#D93025";
        if(txtMa.value == '') {
            ckthem_ma.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã`;
        }
        else
        ckthem_ma.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mã trùng`;
    }
    else {
        txtMa.classList.remove('error');
        ckthem_ma.innerHTML = "";
    }
    if (txtTen.value == '') {
        txtTen.classList.add('error');
        ckthem_ten.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập tên`;
        ckthem_ten.style.color = "#D93025";
        flag = false;
    }
    else {
        txtTen.classList.remove('error');
        ckthem_ten.innerHTML = "";
    }
    if (txtNgaysinh.value == '') {
        txtNgaysinh.classList.add('error');
        ckthem_ngaysinh.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập ngày sinh`;
        ckthem_ngaysinh.style.color = "#D93025";
        flag = false;
    }
    else {
        txtNgaysinh.classList.remove('error');
        ckthem_ngaysinh.innerHTML = "";
    }
    if(txtGioitinh == false) {
        flag = false;
        ckthem_gioitinh.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giới tính`;
        ckthem_gioitinh.style.color = "#D93025";
    }
    else {
        ckthem_gioitinh.style.display = "none";
    }
    if (txtDiachi.value == '') {
        txtDiachi.classList.add('error');
        ckthem_diachi.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập địa chỉ`;
        ckthem_diachi.style.color = "#D93025";
        flag = false;
    }
    else {
        txtDiachi.classList.remove('error');
        ckthem_diachi.innerHTML = "";
    }
    if (txtSdt.value == '' || txtSdt.value.search(numbers) == -1 || txtSdt.value.length != 10) {
        txtSdt.classList.add('error');
        ckthem_sdt.style.color = "#D93025";
        flag = false;
        if (txtSdt.value == '') {
            ckthem_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số điện thoại`;
        }
        else if (txtSdt.value.search(numbers) == -1) {
            ckthem_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
        else if (txtSdt.value.length != 10) {
            ckthem_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số điện thoại không hợp lệ`;
        }
    }
    else {
        txtSdt.classList.remove('error');
        ckthem_sdt.innerHTML = "";
    }
    if (txtEmail.value == '' || txtEmail.value.search(checkemail) == -1) {
        txtEmail.classList.add('error');
        ckthem_email.style.color = "#D93025";
        flag = false;
        if (txtEmail.value == '') {
            ckthem_email.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập email`;
        }
        else
            ckthem_email.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Email không hợp lệ`;
    }
    else {
        txtEmail.classList.remove('error');
        ckthem_email.innerHTML = "";
    }
    return flag;
}
function Check_InputSua() {
    var txtTen = document.getElementById('tenSua');
    var txtNgaysinh = document.getElementById('ngaysinhSua');
    var txtGioitinh = Check_GioitinhSua();
    var txtDiachi = document.getElementById('diachiSua');
    var txtSdt = document.getElementById('sdtSua');
    var txtEmail = document.getElementById('emailSua');
    var cksua_ten = document.querySelector('.cksua_ten');
    var cksua_ngaysinh = document.querySelector('.cksua_ngaysinh');
    var cksua_gioitinh = document.querySelector('.cksua_gioitinh');
    var cksua_diachi = document.querySelector('.cksua_diachi');
    var cksua_sdt = document.querySelector('.cksua_sdt');
    var cksua_email = document.querySelector('.cksua_email');
    var numbers = /^[0-9]+$/;
    var checkemail = /^([\w\.])+@([a-zA-Z0-9\-]{2,4})+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
    var flag = true;
    if (txtTen.value == '') {
        txtTen.classList.add('error');
        cksua_ten.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập tên`;
        cksua_ten.style.color = "#D93025";
        flag = false;
    }
    else {
        txtTen.classList.remove('error');
        cksua_ten.innerHTML = "";
    }
    if (txtNgaysinh.value == '') {
        txtNgaysinh.classList.add('error');
        cksua_ngaysinh.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập ngày sinh`;
        cksua_ngaysinh.style.color = "#D93025";
        flag = false;
    }
    else {
        txtNgaysinh.classList.remove('error');
        cksua_ngaysinh.innerHTML = "";
    }
    if (txtGioitinh == false) {
        cksua_gioitinh.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giới tính`;
        cksua_gioitinh.style.color = "#D93025";
        flag = false;
    }
    else {
        cksua_gioitinh.innerHTML = "";
    }
    if (txtDiachi.value == '') {
        txtDiachi.classList.add('error');
        cksua_diachi.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập địa chỉ`;
        cksua_diachi.style.color = "#D93025";
        flag = false;
    }
    else {
        txtDiachi.classList.remove('error');
        cksua_diachi.innerHTML = "";
    }
    if (txtSdt.value == '' || txtSdt.value.search(numbers) == -1 || txtSdt.value.length != 10) {
        txtSdt.classList.add('error');
        cksua_sdt.style.color = "#D93025";
        flag = false;
        if (txtSdt.value == '') {
            cksua_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số điện thoại`;
        }
        else if (txtSdt.value.search(numbers) == -1) {
            cksua_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
        else if (txtSdt.value.length != 10) {
            cksua_sdt.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số điện thoại không hợp lệ`;
        }
    }
    else {
        txtSdt.classList.remove('error');
        cksua_sdt.innerHTML = "";
    }
    if (txtEmail.value == '' || txtEmail.value.search(checkemail) == -1) {
        txtEmail.classList.add('error');
        cksua_email.style.color = "#D93025";
        flag = false;
        if (txtEmail.value == '') {
            cksua_email.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập email`;
        }
        else
            cksua_email.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Email không hợp lệ`;
    }
    else {
        txtEmail.classList.remove('error');
        cksua_email.innerHTML = "";
    }
    return flag;
}
function Check_MaTrung(ma) {
    var nhieuitem = document.querySelector('.nhieuitem');
    var all_tr = nhieuitem.querySelectorAll('tr');
    var flag = true;
    for (var i = 0; i < all_tr.length; i++) {
        var all_td = all_tr[i].querySelectorAll('td');
        if (all_td[1].innerText == ma) {
            flag = false;
        }
    }
    return flag;
}
function Check_GioitinhThem() {
    var k_gioitinh = document.querySelector('.k_gioitinh');
    var gioitinh = k_gioitinh.querySelectorAll('input');
    for (var i = 0; i < gioitinh.length; i++) {
        if (gioitinh[i].checked) {
            return gioitinh[i].value;
        }
    }
    return false;
}
function Check_GioitinhSua() {
    var k_gioitinh = document.querySelector('.k_gioitinh1');
    var gioitinh = k_gioitinh.querySelectorAll('input');
    for (var i = 0; i < gioitinh.length; i++) {
        if (gioitinh[i].checked) {
            return gioitinh[i].value;
        }
    }
    return false;
}
// function ChuyenGioiTinh(gioitinh) {
//     var k_gioitinh = document.querySelector('.k_gioitinh');
//     var gioitinh = k_gioitinh.querySelectorAll('input');
//     for (var i = 0; i < gioitinh.length; i++) {
//         if (gioitinh[i].value.indexOf(gioitinh) == 0) {
//             gioitinh[i].checked;
//         }
//     }
// }