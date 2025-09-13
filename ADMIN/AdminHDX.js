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
    var nutsuas_ct = document.getElementsByClassName('suact');
    var nut_huy = document.querySelectorAll('.nut_huy');
    var nut_huy_ct = document.querySelectorAll('.nut_huy_ct');
    var nut_close = document.querySelectorAll('.cls');
    var nut_close_ct = document.querySelectorAll('.cls_ct');
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    var form_sua_ct = document.querySelector('.form_sua_ct');
    var form_them = document.querySelector('.form_them');
    var form_them_ct = document.querySelector('.form_them_ct');
    var nut_sua = document.querySelector('.nut_sua');
    var nutsuact = document.querySelector('.nut_sua_ct');
    var nut_them = document.querySelector('.nutthem');
    var nutthem = document.querySelector('.nut_them');
    var nutthem_ct = document.querySelector('.nut_them_ct');
    for (var i = 0; i < nutsuas.length; i++) {
        var nut_suas = nutsuas[i];
        nut_suas.addEventListener('click', ClickUpdate);
    }
    for (var j = 0; j < nutsuas_ct.length; j++) {
        var nut_suas_ct = nutsuas_ct[j];
        nut_suas_ct.addEventListener('click', ClickSuaCTSP);
    }
    nut_them.addEventListener('click', function () {
        nenden.classList.add('ndhr');
        form_them.classList.add('themhr');
    })
    nutthem.addEventListener('click', Them);
    nutthem_ct.addEventListener('click', ThemCTSP);
    nut_sua.addEventListener('click', Update);
    nutsuact.addEventListener('click', SuaCTSP)
    for (var i = 0; i < nut_close.length; i++) {
        nut_close[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
        })
    }
    for (var i = 0; i < nut_close_ct.length; i++) {
        nut_close_ct[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_them_ct.classList.remove('fthr');
            form_sua_ct.classList.remove('fshr');
            ResetKhiSua();
            ResetCTSP();
        })
    }
    for (var i = 0; i < nut_huy.length; i++) {
        nut_huy[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_sua.classList.remove('suahr');
            form_them.classList.remove('themhr');
        })
    }
    for (var i = 0; i < nut_huy_ct.length; i++) {
        nut_huy_ct[i].addEventListener('click', function () {
            nenden.classList.remove('ndhr');
            form_them_ct.classList.remove('fthr');
            form_sua_ct.classList.remove('fshr');
            ResetKhiSua();
            ResetCTSP();
        })
    }
    nenden.addEventListener('click', function () {
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        form_them.classList.remove('themhr');
        form_them_ct.classList.remove('fthr');
        form_sua_ct.classList.remove('fshr');
        ResetKhiSua();
        ResetCTSP();
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
    CapNhatTien();





    //JS CHO PHẦN CHI TIẾT SẢN PHẨM
    var xemcts = document.getElementsByClassName('xemct');
    for (var j = 0; j < xemcts.length; j++) {
        var xemct = xemcts[j];
        xemct.addEventListener('click', ClickXemCTSP)
    }
    var xoacts = document.getElementsByClassName('xoact');
    for (var j = 0; j < xoacts.length; j++) {
        var xoact = xoacts[j];
        xoact.addEventListener('click', XoaCTSP)
    }
    var themcts = document.getElementsByClassName('themct');
    for (var j = 0; j < themcts.length; j++) {
        var themct = themcts[j];
        themct.addEventListener('click', ClickThemCTSP);
    }
})
function Them() {
    var nenden = document.querySelector('.nenden');
    var form_them = document.querySelector('.form_them');
    //xử lý phần thông báo
    // KtraThem();
    var txtMahd = document.getElementById('mahdThem');
    var txtMancc = document.getElementById('manccThem');
    var txtManv = document.getElementById('manvThem');
    var txtNgaynhap = document.getElementById('ngaynhapThem');
    if (Check_InputThem()) {
        var thongbaothem = document.querySelector('.thongbaothem');
        var nhieuitem = document.querySelector('.nhieuitem');
        var it_Them = document.createElement('tr');
        var content_it = `
        <td></td>
        <td>${txtMahd.value}</td>
        <td>${txtMancc.value}</td>
        <td>${txtManv.value}</td>
        <td>${txtNgaynhap.value}</td>
        <td>0 đ</td>
        <td>
            <a href="#" class="sua"><img src="IMAGES/edit.png" alt=""></a>
            <a href="#" class="xoa"><img src="IMAGES/delete.png" alt=""></a>
            <a href="#" class="xemct" style="margin-left: 13px;"><img src="IMAGES/binoculars.png"
                                    alt=""></a>
            <div class="chitiet">
                <ul class="tieude">
                    <li>Mã sản phẩm</li>
                    <li>Số lượng</li>
                    <li>Giá</li>
                    <li>Tổng tiền</li>
                    <li>Chức năng</li>
                    <li><a href="#" class="themct"><img src="IMAGES/add-square-button.png" alt=""></a></li>
                </ul>
                <ul class="dulieuchitiet">
                    <li></li>
                </ul>    
            </div>
        </td>`;
        it_Them.innerHTML = content_it;
        nhieuitem.append(it_Them);
        nenden.classList.remove('ndhr');
        form_them.classList.remove('themhr');
        it_Them.querySelector('.sua').addEventListener('click', ClickUpdate);
        it_Them.querySelector('.xoa').addEventListener('click', Delete);
        it_Them.querySelector('.xemct').addEventListener('click', ClickXemCTSP)
        it_Them.querySelector('.themct').addEventListener('click', ClickThemCTSP);
        UpdateSTT();
        UpdateSoLuong();
        CapNhatTien();
        thongbaothem.classList.add('tbhr');
        txtMahd.value = "";
        txtMancc.value = "";
        txtManv.value = "";
        txtNgaynhap.value = "";
    }
}
function ClickUpdate(event) {
    var nut_suas = event.target;
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    nenden.classList.add('ndhr');
    form_sua.classList.add('suahr');
    var tr = nut_suas.parentElement.parentElement.parentElement;
    var txtMahd = document.getElementById('mahdSua');
    var txtMancc = document.getElementById('manccSua');
    var txtManv = document.getElementById('manvSua');
    var txtNgaynhap = document.getElementById('ngaynhapSua');
    var td = tr.querySelectorAll('td');
    txtMahd.value = td[1].innerText;
    txtMancc.value = td[2].innerText;
    txtManv.value = td[3].innerText;
    txtNgaynhap.value = td[4].innerText;
    tr.classList.add('it_update');
}
function Update() {
    var nenden = document.querySelector('.nenden');
    var form_sua = document.querySelector('.form_sua');
    var tr_update = document.querySelector('.it_update');
    var td_update = tr_update.querySelectorAll('td');
    var thongbaosua = document.querySelector('.thongbaosua');
    var txtMahd = document.getElementById('mahdSua');
    var txtMancc = document.getElementById('manccSua');
    var txtManv = document.getElementById('manvSua');
    var txtNgaynhap = document.getElementById('ngaynhapSua');
    if (Check_InputSua()) {
        td_update[1].innerText = txtMahd.value;
        td_update[2].innerText = txtMancc.value;
        td_update[3].innerText = txtManv.value;
        td_update[4].innerText = txtNgaynhap.value;
        nenden.classList.remove('ndhr');
        form_sua.classList.remove('suahr');
        thongbaosua.classList.add('tbhr');
        Reset();
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
        CapNhatTien();
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
        var tmp = all_td[1].innerText;
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
    var txtMahd = document.getElementById('mahdThem');
    var txtMancc = document.getElementById('manccThem');
    var txtManv = document.getElementById('manvThem');
    var txtNgaynhap = document.getElementById('ngaynhapThem');
    var ckthem_mahd = document.querySelector('.ckthem_mahd');
    var ckthem_mancc = document.querySelector('.ckthem_mancc');
    var ckthem_manv = document.querySelector('.ckthem_manv');
    var ckthem_ngaynhap = document.querySelector('.ckthem_ngaynhap');
    var flag = true;
    if (txtMahd.value == '' || Check_MaTrung(txtMahd.value) == false) {
        txtMahd.classList.add('error');
        flag = false;
        ckthem_mahd.style.color = "#D93025";
        if (txtMahd.value == '') {
            ckthem_mahd.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã hóa đơn`;
        }
        else
            ckthem_mahd.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mã hóa đơn trùng`;

    }
    else {
        txtMahd.classList.remove('error');
        ckthem_mahd.innerHTML = "";
    }
    if (txtMancc.value == '') {
        txtMancc.classList.add('error');
        ckthem_mancc.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã khách hàng`;
        ckthem_mancc.style.color = "#D93025";
        flag = false;
    }
    else {
        txtMancc.classList.remove('error');
        ckthem_mancc.innerHTML = "";
    }
    if (txtManv.value == '') {
        txtManv.classList.add('error');
        ckthem_manv.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã nhân viên`;
        ckthem_manv.style.color = "#D93025";
        flag = false;
    }
    else {
        txtManv.classList.remove('error');
        ckthem_manv.innerHTML = "";
    }
    if (txtNgaynhap.value == '') {
        txtNgaynhap.classList.add('error');
        ckthem_ngaynhap.style.color = "#D93025";
        flag = false;
        ckthem_ngaynhap.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập ngày xuất`;
    }
    else {
        txtNgaynhap.classList.remove('error');
        ckthem_ngaynhap.innerHTML = "";
    }
    return flag;
}
function Check_InputSua() {
    var txtMancc = document.getElementById('manccSua');
    var txtManv = document.getElementById('manvSua');
    var txtNgaynhap = document.getElementById('ngaynhapSua');
    var cksua_mancc = document.querySelector('.cksua_mancc');
    var cksua_manv = document.querySelector('.cksua_manv');
    var cksua_ngaynhap = document.querySelector('.cksua_ngaynhap');
    var flag = true;
    if (txtMancc.value == '') {
        txtMancc.classList.add('error');
        cksua_mancc.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã khách hàng`;
        cksua_mancc.style.color = "#D93025";
        flag = false;
    }
    else {
        txtMancc.classList.remove('error');
        cksua_mancc.innerHTML = "";
    }
    if (txtManv.value == '') {
        txtManv.classList.add('error');
        cksua_manv.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã nhân viên`;
        cksua_manv.style.color = "#D93025";
        flag = false;
    }
    else {
        txtManv.classList.remove('error');
        cksua_manv.innerHTML = "";
    }
    if (txtNgaynhap.value == '') {
        txtNgaynhap.classList.add('error');
        cksua_ngaynhap.style.color = "#D93025";
        flag = false;
        cksua_ngaynhap.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập ngày xuất`;
    }
    else {
        txtNgaynhap.classList.remove('error');
        cksua_ngaynhap.innerHTML = "";
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



// CÁC HÀM XỬ LÝ PHẦN CHI TIẾT
function ClickThemCTSP(event) {
    var themct = event.target;
    var nenden = document.querySelector('.nenden');
    var form_them_ct = document.querySelector('.form_them_ct');
    nenden.classList.add('ndhr');
    form_them_ct.classList.add('fthr');
    var chitiet = themct.parentElement.parentElement.parentElement.parentElement;
    var dulieuchitietli = chitiet.querySelector('.dulieuchitiet li');
    dulieuchitietli.classList.add('dadanhdau');
}
function ThemCTSP() {
    var form_them_ct = document.querySelector('.form_them_ct');
    var nenden = document.querySelector('.nenden');
    var maspThem = document.getElementById('maspThem');
    var soluongThem = document.getElementById('soluongThem');
    var giaThem = document.getElementById('giaThem');
    var dulieuchitietli = document.querySelector('.dadanhdau');
    var spctthem = document.createElement('ul');
    if (Check_InputThemCTSP()) {
        var gia = parseFloat(giaThem.value).toLocaleString() + ' đ';
        var tongtien = parseFloat(soluongThem.value * giaThem.value).toLocaleString() + ' đ';
        var ndthem = `<li>${maspThem.value}</li>
    <li>${soluongThem.value}</li>
    <li>${gia}</li>
    <li>${tongtien}</li>
    <li>
        <a href="#" class="suact"><img src="IMAGES/edit.png" alt=""></a>
        <a href="#" class="xoact"><img src="IMAGES/delete.png" alt=""></a>
    </li>`;
        spctthem.innerHTML = ndthem;
        dulieuchitietli.append(spctthem);
        ResetCTSP();
        CapNhatTien();
        nenden.classList.remove('ndhr');
        form_them_ct.classList.remove('fthr');
        spctthem.querySelector('.suact').addEventListener('click', ClickSuaCTSP);
        spctthem.querySelector('.xoact').addEventListener('click', XoaCTSP);
        maspThem.value = '';
        soluongThem.value = '';
        giaThem.value = '';
    }

}
function ClickSuaCTSP(event) {
    var nut_suas_ct = event.target;
    var form_sua_ct = document.querySelector('.form_sua_ct');
    var nenden = document.querySelector('.nenden');
    form_sua_ct.classList.add('fshr');
    nenden.classList.add('ndhr');
    var maspSua = document.getElementById('maspSua');
    var soluongSua = document.getElementById('soluongSua');
    var giaSua = document.getElementById('giaSua');
    var ul_sua = nut_suas_ct.parentElement.parentElement.parentElement;
    var li_sua = ul_sua.querySelectorAll('li');
    ul_sua.classList.add('ul_sua');
    maspSua.value = li_sua[0].innerHTML;
    soluongSua.value = li_sua[1].innerHTML;
    var tmp = li_sua[2].innerHTML;
    tmp = tmp.replace(' đ', '').split('.').join('');
    tmp = parseFloat(tmp);
    giaSua.value = tmp;
}
function SuaCTSP() {
    var form_sua_ct = document.querySelector('.form_sua_ct');
    var nenden = document.querySelector('.nenden');
    var soluongSua = document.getElementById('soluongSua');
    var giaSua = document.getElementById('giaSua');
    var ul_sua = document.querySelector('.ul_sua');
    var li_sua = ul_sua.querySelectorAll('li');
    if (Check_InputSuaCTSP()) {
        var tongtien = parseFloat(soluongSua.value * giaSua.value).toLocaleString() + ' đ';
        li_sua[1].innerHTML = soluongSua.value;
        var tmp = parseFloat(giaSua.value).toLocaleString() + ' đ';
        li_sua[2].innerHTML = tmp;
        li_sua[3].innerHTML = tongtien;
        form_sua_ct.classList.remove('fshr');
        nenden.classList.remove('ndhr');
        ul_sua.classList.remove('.ul_sua');
        ResetKhiSua();
        CapNhatTien();
    }

}
function ResetCTSP() {
    var dangdanhdau = document.querySelector('.dadanhdau');
    var maspThem = document.getElementById('maspThem');
    var soluongThem = document.getElementById('soluongThem');
    var giaThem = document.getElementById('giaThem');
    var ckthem_masp = document.querySelector('.ckthem_masp');
    var ckthem_soluong = document.querySelector('.ckthem_soluong');
    var ckthem_gia = document.querySelector('.ckthem_gia');
    if (dangdanhdau) {
        dangdanhdau.classList.remove('dadanhdau');
    }
    maspThem.value = '';
    soluongThem.value = '';
    giaThem.value = '';
    ckthem_masp.innerHTML = '';
    ckthem_soluong.innerHTML = '';
    ckthem_gia.innerHTML = '';
    var error = document.querySelectorAll('.error');
    for (var i = 0; i < error.length; i++) {
        error[i].classList.remove('error');
    }
}
function ResetKhiSua() {
    var ul_sua = document.querySelector('.ul_sua');
    var soluongSua = document.getElementById('soluongSua');
    var giaSua = document.getElementById('giaSua');
    var cksua_soluong = document.querySelector('.cksua_soluong');
    var cksua_gia = document.querySelector('.cksua_gia');
    if (ul_sua) {
        ul_sua.classList.remove('ul_sua');
    }
    soluongSua.value = '';
    giaSua.value = '';
    cksua_gia.innerHTML = '';
    cksua_soluong.innerHTML = '';
    var error = document.querySelectorAll('.error');
    for (var i = 0; i < error.length; i++) {
        error[i].classList.remove('error');
    }
}
function ClickXemCTSP(event) {
    var xemct = event.target;
    var khoichitiet = xemct.parentElement.nextElementSibling;
    khoichitiet.classList.toggle('duockick');
}
function XoaCTSP(event) {
    var xoact = event.target;
    xoact.parentElement.parentElement.parentElement.remove();
    CapNhatTien();
}
function CapNhatTien() {
    var dulieuchitiet = document.getElementsByClassName('dulieuchitiet');
    var tongtiennhaphang = document.querySelector('.tg');
    var soluongnhapve = document.querySelector('.tslsp');
    var tongsoluong = 0;
    var tongtiennhap = 0;
    for (var i = 0; i < dulieuchitiet.length; i++) {
        var all_ul = dulieuchitiet[i].querySelectorAll('ul');
        var thanhtien = 0;
        for (var j = 0; j < all_ul.length; j++) {
            var all_li = all_ul[j].querySelectorAll('li');
            var soluong = parseInt(all_li[1].innerHTML);
            tongsoluong = tongsoluong + soluong;
            var gia = parseFloat(all_li[2].innerHTML.replace(' đ', '').split('.').join(''));
            var tongtien = parseFloat(soluong * gia);
            thanhtien = thanhtien + tongtien;
            tongtien = tongtien.toLocaleString() + ' đ';
            all_li[3].innerHTML = tongtien;
        }
        tongtiennhap = tongtiennhap + thanhtien;
        var all_td = dulieuchitiet[i].parentElement.parentElement.parentElement.querySelectorAll('td');
        all_td[5].innerHTML = thanhtien.toLocaleString() + ' đ';
    }
    soluongnhapve.innerHTML = tongsoluong;
    tongtiennhaphang.innerHTML = parseFloat(tongtiennhap).toLocaleString() + ' đ';
}
function Check_InputThemCTSP() {
    var maspThem = document.getElementById('maspThem');
    var soluongThem = document.getElementById('soluongThem');
    var giaThem = document.getElementById('giaThem');
    var ckthem_masp = document.querySelector('.ckthem_masp');
    var ckthem_soluong = document.querySelector('.ckthem_soluong');
    var ckthem_gia = document.querySelector('.ckthem_gia');
    var numbers = /^[0-9]+$/;
    var flag = true;
    if (maspThem.value == '' || Check_MaTrungCTSP(maspThem.value) == false) {
        flag = false;
        maspThem.classList.add('error');
        ckthem_masp.style.color = "#D93025";
        if (maspThem.value == '') {
            ckthem_masp.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập mã sản phẩm`;
        }
        else
            ckthem_masp.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Mã sản phẩm trùng`;
    }
    else {
        maspThem.classList.remove('error');
        ckthem_masp.innerHTML = "";
    }
    var soluong = parseInt(soluongThem.value);
    if (soluongThem.value == '' || soluong <= 0 || soluongThem.value.search(numbers) == -1) {
        flag = false;
        soluongThem.classList.add('error');
        ckthem_soluong.style.color = "#D93025";
        if (soluongThem.value == '') {
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số lượng`;
        }
        else if (soluong <= 0) {
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số lượng không hợp lệ`;
        }
        else
            ckthem_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
    }
    else {
        soluongThem.classList.remove('error');
        ckthem_soluong.innerHTML = "";
    }
    var gia = parseFloat(giaThem.value);
    if (giaThem.value == '' || gia <= 0 || giaThem.value.search(numbers) == -1) {
        flag = false;
        giaThem.classList.add('error');
        ckthem_gia.style.color = "#D93025";
        if (giaThem.value == '') {
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giá`;
        }
        else if (gia <= 0) {
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Giá không hợp lệ`;
        }
        else
            ckthem_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
    }
    else {
        giaThem.classList.remove('error');
        ckthem_gia.innerHTML = "";
    }
    return flag;
}
function Check_InputSuaCTSP() {
    var soluongSua = document.getElementById('soluongSua');
    var giaSua = document.getElementById('giaSua');
    var cksua_soluong = document.querySelector('.cksua_soluong');
    var cksua_gia = document.querySelector('.cksua_gia');
    var numbers = /^[0-9]+$/;
    var flag = true;
    var soluong = parseInt(soluongSua.value);
    if (soluongSua.value == '' || soluong <= 0 || soluongSua.value.search(numbers) == -1) {
        flag = false;
        soluongSua.classList.add('error');
        cksua_soluong.style.color = "#D93025";
        if (soluongSua.value == '') {
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số lượng`;
        }
        else if (soluong <= 0) {
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Số lượng không hợp lệ`;
        }
        else
            cksua_soluong.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
    }
    else {
        soluongSua.classList.remove('error');
        cksua_soluong.innerHTML = "";
    }
    var gia = parseFloat(giaSua.value);
    if (giaSua.value == '' || gia <= 0 || giaSua.value.search(numbers) == -1) {
        flag = false;
        giaSua.classList.add('error');
        cksua_gia.style.color = "#D93025";
        if (giaSua.value == '') {
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập giá`;
        }
        else if (gia <= 0) {
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Giá không hợp lệ`;
        }
        else
            cksua_gia.innerHTML = `<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Hãy nhập số`;
    }
    else {
        giaSua.classList.remove('error');
        cksua_gia.innerHTML = "";
    }
    return flag;
}
function Check_MaTrungCTSP(masp) {
    var dulieuchitietli = document.querySelector('.dadanhdau');
    var all_ul = dulieuchitietli.querySelectorAll('ul');
    var flag = true;
    for (var i = 0; i < all_ul.length; i++) {
        var all_li = all_ul[i].querySelectorAll('li');
        if (all_li[0].innerHTML == masp) {
            flag = false;
        }
    }
    return flag;

}