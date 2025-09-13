if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', splv4);
}
else {
    splv4();
}
function splv4() {


    //--- Xử lý phần click vào size ---
    var sizes = document.querySelectorAll('.size ul li');
    for (var i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', function () {
            for (var j = 0; j < sizes.length; j++) {
                sizes[j].classList.remove('kicksize');
            }
            this.classList.add('kicksize');
        })
    }
    //--- end Xử lý phần click vào size ---
    //--- Xử lý phần click vào color ---
    var colors = document.querySelectorAll('.color ul li');
    for (var i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', function () {
            for (var j = 0; j < colors.length; j++) {
                colors[j].classList.remove('kh');
            }
            this.classList.add('kh');
        })
    }
    //---end Xử lý phần click vào color ---

    var nutcong = document.getElementsByClassName('nutcong')[0];
    var nuttru = document.getElementsByClassName('nuttru')[0];
    var sl_chitietsp = document.getElementsByClassName('soluonghang')[0];
    nutcong.addEventListener('click', function () {
        sl_chitietsp.value++;
    })
    nuttru.addEventListener('click', function () {
        sl_chitietsp.value--;
        if (sl_chitietsp.value <= 0) {
            sl_chitietsp.value = 1;
        }
    })
    sl_chitietsp.addEventListener('change', function () {
        if (sl_chitietsp.value <= 0) {
            sl_chitietsp.value = 1;
        }
    })

    //--- Xử lý js phần kích ảnh ----
    var anhcts = document.querySelectorAll('.cacanhcon img');
    var anhht = document.getElementsByClassName('anhht')[0];
    for (var i = 0; i < anhcts.length; i++) {
        anhcts[i].addEventListener('click', function () {
            for (var j = 0; j < anhcts.length; j++) {
                anhcts[j].classList.remove('kickanh');
            }
            this.classList.add('kickanh');
            anhht.src = this.src;
        })
    }
    //---end Xử lý js phần kích ảnh ----

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
        nut_them.addEventListener('click', Click_ThemSPCT)
    }
    // --END VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
}
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
function Click_ThemSPCT(event) {
    var nut_themctsp = event.target;
    var tt_sanpham = nut_themctsp.parentElement.parentElement;
    var ten_sanpham = tt_sanpham.getElementsByClassName('tenspct')[0].innerText;
    var gia_sanpham = tt_sanpham.getElementsByClassName('giaspct')[0].innerText;
    var soluong_sanpham = tt_sanpham.getElementsByClassName('soluonghang')[0].value;
    var dg_sanpham = tt_sanpham.parentElement.getElementsByClassName('anhht')[0].src;
    ThemSPCT(ten_sanpham, gia_sanpham, soluong_sanpham, dg_sanpham);
    CapNhatSanPham();
}
function ThemSPCT(ten_sanpham, gia_sanpham, soluong_sanpham, dg_sanpham) {
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
        <input type="number" class="soluong" value="${soluong_sanpham}">
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