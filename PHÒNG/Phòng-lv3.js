if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', phonglv3);
}
else {
    phonglv3();
}
function phonglv3() {
    //-- VIẾT JS CHO PHẦN view --
    var nutviews = document.getElementsByClassName('xem');
    var khoixemsp = document.getElementsByClassName('khoixemsp')[0];
    var exit = document.getElementsByClassName('exit')[0];
    var kx_dganh = document.querySelector('.ndtrai img');
    var kx_ten = document.getElementsByClassName('kx_ten')[0];
    var kx_gia = document.getElementsByClassName('kx_gia')[0];
    for (var i = 0; i < nutviews.length; i++) {
        nutviews[i].addEventListener('click', function () {
            khoixemsp.classList.toggle('hienra');
            kx_dganh.src = this.parentElement.querySelector('.anhsp').src;
            kx_ten.innerHTML = this.parentElement.querySelector('.tensp').innerHTML;
            kx_gia.innerHTML = this.parentElement.querySelector('.giasp').innerHTML;
        })
    }
    exit.addEventListener('click', function () {
        khoixemsp.classList.remove('hienra');
    })
    //-- end VIẾT JS CHO PHẦN view --

    //-- VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --
    var loctheogia = document.getElementsByClassName("loctheogia");
    for (var i = 0; i < loctheogia.length; i++) {
        var sliders = loctheogia[i].getElementsByTagName("input");
        for (var j = 0; j < sliders.length; j++) {
            sliders[j].oninput = LaySoLuong;
            sliders[j].oninput();
        }
    }
    //-- end VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --


    // --VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
    var nuts_xoasp = document.getElementsByClassName('xoasp');
    for (var i = 0; i < nuts_xoasp.length; i++) {
        var nut_xoasp = nuts_xoasp[i];
        nut_xoasp.addEventListener('click', XoaSP)
    }
    var sls_sanpham = document.getElementsByClassName('soluong');
    for (var i = 0; i < sls_sanpham.length; i++) {
        var sl_sanpham = sls_sanpham[i];
        sl_sanpham.addEventListener('change', ThayDoiSL)
    }
    var nuts_them = document.getElementsByClassName('mua');
    for (var i = 0; i < nuts_them.length; i++) {
        var nut_them = nuts_them[i];
        nut_them.addEventListener('click', Click_ThemSP)
    }
    // --END VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--


    // --VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--
    var nuttimkiem = document.getElementsByClassName('submit')[0];
    nuttimkiem.addEventListener('click', TimKiemSP)
    // --END VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--


    //--VIẾT JS CHO PHẦN CHỌN GIÁ SẮP XẾP
    var select = document.querySelector('.xeptheogia select');
    select.addEventListener('change', Check_Select);

    //VIẾT JS XỬ CHO PHẦN LỌC THEO GIÁ 04/05/2019
    var slider1 = document.getElementById('giadau');
    var slider2 = document.getElementById('giacuoi');
    slider1.addEventListener('change', LocTheoGia);
    slider2.addEventListener('change', LocTheoGia);
}
function LocTheoGia() {
    var slider1 = document.getElementById('giadau');
    var slider2 = document.getElementById('giacuoi');
    var sanphams = document.getElementsByClassName('motsp');
    var giadau = slider1.value;
    var giacuoi = slider2.value;
    for (var i = 0; i < sanphams.length; i++) {
        var giasp = sanphams[i].getElementsByClassName('giasp')[0].innerText;
        if(!(ChuyenDoiGia(giasp) >= giadau && ChuyenDoiGia(giasp) <= giacuoi)) {
            sanphams[i].classList.add('andi');
        }
    }
}
function Check_Select() {
    var xeptheogia = document.querySelector('.xeptheogia select').selectedIndex;
    if (xeptheogia == 0) {
        SapXepGiamDan();
    }
    else
        SapXepTangDan();
}
function SapXepTangDan() {
    var khoinhieusp = document.querySelector('.nhieusp');
    var nhieusp = khoinhieusp.getElementsByClassName('motsp');
    for (var i = 0; i < nhieusp.length - 1; i++) {
        for (var j = i + 1; j < nhieusp.length; j++) {
            var giatruoc = nhieusp[i].querySelector('.giasp').innerHTML;
            var giasau = nhieusp[j].querySelector('.giasp').innerHTML;
            if (ChuyenDoiGia(giatruoc) > ChuyenDoiGia(giasau)) {
                khoinhieusp.insertBefore(nhieusp[j], nhieusp[i]);
            }
        }
    }
}
function SapXepGiamDan() {
    var khoinhieusp = document.querySelector('.nhieusp');
    var nhieusp = khoinhieusp.getElementsByClassName('motsp');
    for (var i = 0; i < nhieusp.length - 1; i++) {
        for (var j = i + 1; j < nhieusp.length; j++) {
            var giatruoc = nhieusp[i].querySelector('.giasp').innerHTML;
            var giasau = nhieusp[j].querySelector('.giasp').innerHTML;
            if (ChuyenDoiGia(giatruoc) < ChuyenDoiGia(giasau)) {
                khoinhieusp.insertBefore(nhieusp[j], nhieusp[i]);
            }
        }
    }
}
function ChuyenDoiGia(gia) {
    gia = gia.replace('Đ', '');
    gia = gia.replace(/,/g, '');
    gia = parseFloat(gia);
    return gia;
}
//-- VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --
function LaySoLuong() {
    var parent = this.parentNode;
    var sliders = parent.getElementsByTagName("input");
    var slider1 = parseFloat(sliders[0].value);
    var slider2 = parseFloat(sliders[1].value);
    if (slider1 > slider2) {
        var tmp = slider2;
        slider2 = slider1;
        slider1 = tmp;
    }
    var khoangtien = parent.getElementsByClassName('khoanggia')[0];
    slider1 = slider1.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    slider2 = slider2.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    khoangtien.innerHTML = slider1 + ' - ' + slider2;
}
//-- END VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --

// --VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--
function TimKiemSP(event) {
    var nuttimkiem = event.target;
    var sanphams = document.getElementsByClassName('motsp');
    var otimkiem = document.getElementById('search');
    otimkiem.addEventListener('change', function () {
        if (otimkiem.value == '') {
            for (var i = 0; i < sanphams.length; i++) {
                sanphams[i].classList.remove('andi');
            }
        }
    })
    var tensp_timkiem = otimkiem.value;
    tensp_timkiem = tensp_timkiem.toUpperCase();
    for (var i = 0; i < sanphams.length; i++) {
        var tmp = sanphams[i].getElementsByClassName('tensp')[0].innerText;
        if (tmp.indexOf(tensp_timkiem) < 0) {
            sanphams[i].classList.add('andi');
        }
    }
}
// --END VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--


// --VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
function CapNhatSanPham() {
    var khoisp_giohang = document.getElementsByClassName('danhsachspgh')[0];
    var cacsp_giohang = khoisp_giohang.getElementsByClassName('sanphamgh');
    var tongtien = 0;
    var ssp = 0;
    for (var i = 0; i < cacsp_giohang.length; i++) {
        var motsp_giohang = cacsp_giohang[i];
        var gia = motsp_giohang.getElementsByClassName('giaspgh')[0];
        var sl = motsp_giohang.getElementsByClassName('soluong')[0];
        gia = gia.innerHTML;
        gia = gia.replace('Đ', '');
        gia = gia.replace(/,/g, '');
        gia = parseFloat(gia);
        var soluong_sp = sl.value;
        tongtien = tongtien + (gia * soluong_sp);
        ssp++;
    }
    tongtien = tongtien.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    document.getElementsByClassName('tongtien')[0].innerText = tongtien;
    document.getElementsByClassName('amount')[0].innerText = ssp;
}
function XoaSP(event) {
    var nut_xoasp = event.target;
    nut_xoasp.parentElement.parentElement.remove();
    CapNhatSanPham();
}
function ThayDoiSL(event) {
    var sl_sanpham = event.target;
    if (sl_sanpham.value <= 0) {
        sl_sanpham.value = 1;
    }
    CapNhatSanPham();
}
function Click_ThemSP(event) {
    var nut_them = event.target;
    var tt_sanpham = nut_them.parentElement.parentElement.parentElement;
    var ten_sanpham = tt_sanpham.getElementsByClassName('tensp')[0].innerText;
    var gia_sanpham = tt_sanpham.getElementsByClassName('giasp')[0].innerText;
    var dg_sanpham = tt_sanpham.getElementsByClassName('anhsp')[0].src;
    ThemSP(ten_sanpham, gia_sanpham, dg_sanpham);
    CapNhatSanPham();
}
function ThemSP(ten_sanpham, gia_sanpham, dg_sanpham) {
    var sanphammoi = document.createElement('div');
    sanphammoi.classList.add('sanphamgh');
    var sps_giohang = document.getElementsByClassName('danhsachspgh')[0];
    var tens_sanphamgh = document.getElementsByClassName('tenspgh');
    for (var i = 0; i < tens_sanphamgh.length; i++) {
        if (tens_sanphamgh[i].innerText == ten_sanpham) {
            alert('Sản phẩm đã tồn tại trong giỏ hàng !');
            return;
        }
    }
    var nd_sanpham = `
        <img src="${dg_sanpham}" alt="" />
        <div class="thongtinspgh">
        <p class="tenspgh">${ten_sanpham}</p>
        <input type="number" class="soluong" value="1">
        <p class="giaspgh">${gia_sanpham}</p>
        </div>
        <a href="#" class="xoasp">
        <img src="../images/delete.png" alt="" />
        </a>`;
    sanphammoi.innerHTML = nd_sanpham;
    sps_giohang.append(sanphammoi);
    sanphammoi.getElementsByClassName('xoasp')[0].addEventListener('click', XoaSP);
    sanphammoi.getElementsByClassName('soluong')[0].addEventListener('change', ThayDoiSL);
}

// --END VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--