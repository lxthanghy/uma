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
    UpdateTongsoluong();
    UpdateTonggia();
})
function Them() {
    var nenden = document.querySelector('.nenden');
    var form_them = document.querySelector('.form_them');
    //xử lý phần thông báo
    // KtraThem();
    var txtMa = document.getElementById('maThem');
    var txtTen = document.getElementById('tenThem');
    var txtGia = document.getElementById('giaThem');
    var txtSoluong = document.getElementById('soluongThem');
    if (Check_InputThem()) {
        var thongbaothem = document.querySelector('.thongbaothem');
        var nhieuitem = document.querySelector('.nhieuitem');
        var it_Them = document.createElement('tr');
        var gia = txtGia.value;
        gia = parseFloat(gia);
        gia = gia.toLocaleString('vi', { style: 'currency', currency: 'VND' });
        var content_it = `
        <td></td>
        <td>${txtMa.value}</td>
        <td>${txtTen.value}</td>
        <td>${gia}</td>
        <td>${txtSoluong.value}</td>
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
        UpdateTongsoluong();
        thongbaothem.classList.add('tbhr');
        txtMa.value = "";
        txtTen.value = "";
        txtGia.value = "";
        txtSoluong.value = "";
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
    var txtGia = document.getElementById('giaSua');
    var txtSoluong = document.getElementById('soluongSua');
    var td = tr.querySelectorAll('td');
    txtMa.value = td[1].innerText;
    txtTen.value = td[2].innerText;
    var tmp = "";
    tmp = td[3].innerText;
    tmp = tmp.split('.').join('');
    tmp = tmp.replace(' đ', '');
    txtGia.value = tmp;
    txtSoluong.value = td[4].innerText;
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
    var txtGia = document.getElementById('giaSua');
    var txtSoluong = document.getElementById('soluongSua');
    if (Check_InputSua()) {
        td_update[1].innerText = txtMa.value;
        td_update[2].innerText = txtTen.value;
        var gia = parseFloat(txtGia.value);
        gia = gia.toLocaleString() + ' đ';
        td_update[3].innerText = gia;
        td_update[4].innerText = txtSoluong.value;
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        thongbaosua.classList.add('tbhr');
        UpdateTongsoluong();
        UpdateTonggia();
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
        UpdateTongsoluong();
        UpdateTonggia();
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
function UpdateTongsoluong() {
    var tongslsp = document.querySelector('.tslsp');
    var all_item = document.querySelector('.nhieuitem');
    var all_tr = all_item.querySelectorAll('tr');
    var tmp = 0;
    for (var i = 0; i < all_tr.length; i++) {
        var all_td = all_tr[i].querySelectorAll('td');
        var soluong = parseInt(all_td[4].innerText);
        tmp = tmp + soluong;
    }
    tongslsp.innerText = tmp;
}
function UpdateTonggia() {
    var tonggia = document.querySelector('.tg');
    var all_item = document.querySelector('.nhieuitem');
    var all_tr = all_item.querySelectorAll('tr');
    var sumprice = 0;
    for (var i = 0; i < all_tr.length; i++) {
        var all_td = all_tr[i].querySelectorAll('td');
        var tmp = all_td[3].innerText;
        var soluong = parseInt(all_td[4].innerText);
        tmp = tmp.replace(' đ', '');
        tmp = tmp.split('.').join('');
        tmp = parseFloat(tmp);
        tmp = tmp * soluong;
        sumprice = sumprice + tmp;
    }
    sumprice = sumprice.toLocaleString() +' đ';
    tonggia.innerText = sumprice;
}
function Check_InputThem() {
    var txtMa = document.getElementById('maThem');
    var txtTen = document.getElementById('tenThem');
    var txtGia = document.getElementById('giaThem');
    var txtSoluong = document.getElementById('soluongThem');
    var ckthem_ma = document.querySelector('.ckthem_ma');
    var ckthem_ten = document.querySelector('.ckthem_ten');
    var ckthem_gia = document.querySelector('.ckthem_gia');
    var ckthem_soluong = document.querySelector('.ckthem_soluong');
    var gia = parseFloat(txtGia.value);
    var soluong = parseInt(txtSoluong.value);
    var numbers = /^[0-9]+$/;
    var flag = true;

    if (txtMa.value == '' || !Check_MaTrung(txtMa.value)) {
        txtMa.classList.add('error');
        flag = false;
        ckthem_ma.style.color = "#D93025";
        if (txtMa.value == '') {
            ckthem_ma.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã`;
        }
        else if (!Check_MaTrung(txtMa.value)) {
            ckthem_ma.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mã đã trùng`;
        }

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
    if (txtGia.value == '' || gia <= 0 || txtGia.value.search(numbers) == -1) {
        txtGia.classList.add('error');
        ckthem_gia.style.color = "#D93025";
        flag = false;
        if (txtGia.value == '') {
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giá`;
        }
        else if (gia <= 0) {
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Giá không hợp lệ`;
        }
        else if (txtGia.value.search(numbers) == -1) {
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
    }
    else {
        txtGia.classList.remove('error');
        ckthem_gia.innerHTML = "";
    }
    if (txtSoluong.value == '' || soluong <= 0 || txtSoluong.value.search(numbers) == -1) {
        txtSoluong.classList.add('error');
        ckthem_soluong.style.color = "#D93025";
        flag = false;
        if (txtSoluong.value == '') {
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số lượng`;
        }
        else if (soluong <= 0) {
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số lượng không hợp lệ`;
        }
        else if (txtSoluong.value.search(numbers) == -1) {
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
    }
    else {
        txtSoluong.classList.remove('error');
        ckthem_soluong.innerHTML = "";
    }
    return flag;
}
function Check_InputSua() {
    var txtTen = document.getElementById('tenSua');
    var txtGia = document.getElementById('giaSua');
    var txtSoluong = document.getElementById('soluongSua');
    var cksua_ten = document.querySelector('.cksua_ten');
    var cksua_gia = document.querySelector('.cksua_gia');
    var cksua_soluong = document.querySelector('.cksua_soluong');
    var gia = parseFloat(txtGia.value);
    var soluong = parseInt(txtSoluong.value);
    var numbers = /^[0-9]+$/;
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
    if (txtGia.value == '' || gia <= 0 || txtGia.value.search(numbers) == -1) {
        txtGia.classList.add('error');
        cksua_gia.style.color = "#D93025";
        flag = false;
        if (txtGia.value == '') {
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giá`;
        }
        else if (gia <= 0) {
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Giá không hợp lệ`;
        }
        else if (txtGia.value.search(numbers) == -1) {
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
    }
    else {
        txtGia.classList.remove('error');
        cksua_gia.innerHTML = "";
    }
    if (txtSoluong.value == '' || soluong <= 0 || txtSoluong.value.search(numbers) == -1) {
        txtSoluong.classList.add('error');
        cksua_soluong.style.color = "#D93025";
        flag = false;
        if (txtSoluong.value == '') {
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số lượng`;
        }
        else if (soluong <= 0) {
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số lượng không hợp lệ`;
        }
        else if (txtSoluong.value.search(numbers) == -1) {
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
        }
    }
    else {
        txtSoluong.classList.remove('error');
        cksua_soluong.innerHTML = "";
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