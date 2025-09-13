if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', Home)
}
else {
    Home()
}
function Home() {
    //dùng thư viện hiệu ứng khi scroll đến 1 phần tử
    new WOW().init();
    // end dùng thư viện hiệu ứng khi scroll đến 1 phần tử

    
    // --VIẾT JS CHO PHẦN SLIDE 28/03/2019--
    var nut = document.querySelectorAll(".chuyenslide ul li");
	var slides = document.querySelectorAll(".cacslide ul li");
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			var nut_kichhoat = this;
			var stt = 0;
			while (nut_kichhoat = nut_kichhoat.previousElementSibling){
                stt++;
			}
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
			}
			slides[stt].classList.add('active');
		})
	}
	Autoslide();
	function Autoslide() {
		var thoigian = setInterval(function(){
			var slhientai = document.querySelector(".cacslide ul li.active");
			var nuthientai = document.querySelector(".chuyenslide ul li.kichhoat");
			var stt_slhientai = 0;
			while (slhientai = slhientai.previousElementSibling){
                stt_slhientai++;
			}
			if (stt_slhientai < slides.length - 1) {
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
				}
				for (var i = 0; i < nut.length; i++) {
					nut[i].classList.remove('kichhoat');
				}
				slides[stt_slhientai].nextElementSibling.classList.add('active');
				nut[stt_slhientai].nextElementSibling.classList.add('kichhoat');
			}
			else {
				for (var i = 0; i < slides.length; i++) {
					slides[i].classList.remove('active');
				}
				for (var i = 0; i < nut.length; i++) {
					nut[i].classList.remove('kichhoat');
				}
				slides[0].classList.add('active');
				nut[0].classList.add('kichhoat');
			}
		},5000);
	}
    // --END VIẾT JS CHO PHẦN SLIDE 28/03/2019--

    // --VIẾT JS CHO PHẦN SCROLL 05/04/2019--
    var khoitop = document.querySelector('.khoitop');
	var menu = document.querySelector('.mnu');
    var search = document.querySelector('.formtimkiem');
    var lendau = document.querySelector('.lendau');
    lendau.addEventListener('click', function() {
        $('html,body').animate({
            scrollTop : 0
        },900)
    })
    window.addEventListener('scroll',function(){
		if (window.pageYOffset > 30) {
	
			khoitop.classList.add('dinh1');
			
		}
		else {
	
			khoitop.classList.remove('dinh1');
	
        }
        if(window.pageYOffset > 50) {
            lendau.classList.add('lthienra');
        }
        else {
            lendau.classList.remove('lthienra');
        }
		if (window.pageYOffset > 170) {
			menu.classList.add('dinh2');
			search.classList.add('dinh3');
		}
		else {
			menu.classList.remove('dinh2');
			search.classList.remove('dinh3');
		}
	})
    // --END VIẾT JS CHO PHẦN SCROLL 05/04/2019--

    // --VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--
    var nuttimkiem = document.getElementsByClassName('submit')[0];
    nuttimkiem.addEventListener('click', TimKiemSP)
    // --END VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--

    // --VIẾT JS CHO PHẦN CLICK VÀO GIỎ HÀNG 10/04/2019--
    var giohang = document.getElementsByClassName('cart')[0];
    var nut_closse = document.getElementsByClassName('cl')[0];
    var khoigiohang = document.getElementsByClassName('giohang')[0];
    giohang.addEventListener('click', function() {
        khoigiohang.classList.remove('traive');
        khoigiohang.classList.add('phaisang');
    })
    nut_closse.addEventListener('click', function() {
        khoigiohang.classList.remove('phaisang');
        khoigiohang.classList.add('traive');
    })
    // --END VIẾT JS CHO PHẦN CLICK VÀO GIỎ HÀNG--

    // --VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
    var nuts_xoasp = document.getElementsByClassName('xoasp');
    for(var i = 0; i < nuts_xoasp.length; i++) {
        var nut_xoasp = nuts_xoasp[i];
        nut_xoasp.addEventListener('click', XoaSP)
    }
    var sls_sanpham = document.getElementsByClassName('soluong');
    for(var i = 0; i < sls_sanpham.length; i++) {
        var sl_sanpham = sls_sanpham[i];
        sl_sanpham.addEventListener('change', ThayDoiSL)
    }
    var nuts_them = document.getElementsByClassName('mua');
    var nuts_themctsp = document.getElementsByClassName('nut_muahang');
    for(var i = 0; i < nuts_themctsp.length; i++)
    {
        var nut_themctsp = nuts_themctsp[i];
        nut_themctsp.addEventListener('click', Click_ThemSPCT)
    }
    for(var i = 0; i < nuts_them.length; i++) {
        var nut_them = nuts_them[i];
        nut_them.addEventListener('click', Click_ThemSP)
    }
    // --END VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
    //---- JS CHO PHẦN CHI TIẾT SẢN PHẨM ---------
    //--- Xử lý phần click vào size ---
    var sizes = document.querySelectorAll('.size ul li');
    for(var i = 0; i < sizes.length; i++) {
        sizes[i].addEventListener('click', function() {
            for(var j =0; j < sizes.length; j++) {
                sizes[j].classList.remove('kicksize');
            }
            this.classList.add('kicksize');
        })
    }
    //--- end Xử lý phần click vào size ---
    //--- Xử lý phần click vào color ---
    var colors = document.querySelectorAll('.color ul li');
    for(var i = 0; i < colors.length; i++) {
        colors[i].addEventListener('click', function() {
            for(var j =0; j < colors.length; j++) {
                colors[j].classList.remove('kh');
            }
            this.classList.add('kh');
        })
    }
    //---end Xử lý phần click vào color ---
    //--- Xử lý phần số lượng sản phẩm
    window.onload = function() {
        var nutcong = document.getElementsByClassName('nutcong')[0];
        var nuttru = document.getElementsByClassName('nuttru')[0];
        var sl_chitietsp = document.getElementsByClassName('soluonghang')[0];
        nutcong.addEventListener('click', function() {
            sl_chitietsp.value ++;
        })
        nuttru.addEventListener('click', function() {
            sl_chitietsp.value --;
            if(sl_chitietsp.value <= 0) {
                sl_chitietsp.value = 1;
            }
        })
        sl_chitietsp.addEventListener('change', function() {
            if(sl_chitietsp.value <= 0) {
                sl_chitietsp.value = 1;
            }
        })
    }
    //---end Xử lý phần số lượng sản phẩm
    //--- Xử lý js phần kích ảnh ----
    var anhcts = document.querySelectorAll('.cacanhcon img');
    var anhht = document.getElementsByClassName('anhht')[0];
    for(var i = 0; i < anhcts.length; i++) {
        anhcts[i].addEventListener('click', function() {
            for(var j = 0; j < anhcts.length; j++) {
                anhcts[j].classList.remove('kickanh');
            }
            this.classList.add('kickanh');
            anhht.src = this.src;
        })
    }
    //---end Xử lý js phần kích ảnh ----
    //----END JS CHO PHẦN CHI TIẾT SẢN PHẨM -------
    //-- VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --
    var loctheogia = document.getElementsByClassName("loctheogia");
    for(var i = 0;i < loctheogia.length; i++) {
        var sliders = loctheogia[i].getElementsByTagName("input");
        for(var j = 0; j < sliders.length; j++) {
            if(sliders[j].type = "range") {
                sliders[j].oninput = LaySoLuong;
                sliders[j].oninput();
            }
        }
    }
    //-- end VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --
    //-- VIẾT JS CHO PHẦN view --
    var nutviews = document.getElementsByClassName('xem');
    var khoixemsp = document.getElementsByClassName('khoixemsp')[0];
    var exit = document.getElementsByClassName('exit')[0];
    var kx_dganh = document.querySelector('.ndtrai img');
    var kx_ten = document.getElementsByClassName('kx_ten')[0];
    var kx_gia  = document.getElementsByClassName('kx_gia')[0];
    for(var i = 0;i < nutviews.length; i++) {
        nutviews[i].addEventListener('click', function() {
            khoixemsp.classList.toggle('hienra');
            kx_dganh.src = this.parentElement.querySelector('.anhsp').src;
            kx_ten.innerHTML = this.parentElement.querySelector('.tensp').innerHTML;
            kx_gia.innerHTML = this.parentElement.querySelector('.giasp').innerHTML;
        })
    }
    exit.addEventListener('click', function() {
        khoixemsp.classList.remove('hienra');
    })
    //-- end VIẾT JS CHO PHẦN view --
}
// ------------------------------ HẾT READY ------------------------------------

// --VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--
function TimKiemSP(event) {
    var nuttimkiem = event.target;
    var sanphams = document.getElementsByClassName('motsp');
    var otimkiem = document.getElementById('search');
    otimkiem.addEventListener('change', function() {
        if(otimkiem.value == '') {
            for(var i=0; i < sanphams.length; i++) {
                sanphams[i].classList.remove('andi');
            }
        }
    })
    var tensp_timkiem = otimkiem.value;
    tensp_timkiem = tensp_timkiem.toUpperCase();
    for(var i=0; i < sanphams.length; i++) {
        var tmp = sanphams[i].getElementsByClassName('tensp')[0].innerText;
        if(tmp.indexOf(tensp_timkiem) < 0) {
            sanphams[i].classList.add('andi');
        }
    }
}
// --END VIẾT JS CHO PHẦN TÌM KIẾM SẢN PHẨM 09/04/2019--

// --VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
function XoaSP(event) {
    var nut_xoasp = event.target;
    nut_xoasp.parentElement.parentElement.remove();
    CapNhatSanPham();
}
function ThayDoiSL(event) {
    var sl_sanpham = event.target;
    if(sl_sanpham.value <= 0) {
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
    ThemSPCT(ten_sanpham,gia_sanpham,soluong_sanpham,dg_sanpham);
    CapNhatSanPham();
}
function Click_ThemSP(event) {
    var nut_them = event.target;
    var tt_sanpham = nut_them.parentElement.parentElement.parentElement;
    var ten_sanpham = tt_sanpham.getElementsByClassName('tensp')[0].innerText;
    var gia_sanpham = tt_sanpham.getElementsByClassName('giasp')[0].innerText;
    var dg_sanpham = tt_sanpham.getElementsByClassName('anhsp')[0].src;
    ThemSP(ten_sanpham,gia_sanpham,dg_sanpham);
    CapNhatSanPham();
}
function ThemSPCT(ten_sanpham,gia_sanpham,soluong_sanpham,dg_sanpham) {
    var sanphammoi = document.createElement('div');
    sanphammoi.classList.add('sanphamgh');
    var sps_giohang = document.getElementsByClassName('danhsachspgh')[0];
    var tens_sanphamgh = document.getElementsByClassName('tenspgh');
    for(var i = 0; i < tens_sanphamgh.length; i++) {
        if(tens_sanphamgh[i].innerText == ten_sanpham) {
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
function ThemSP(ten_sanpham,gia_sanpham,dg_sanpham) {
    var sanphammoi = document.createElement('div');
    sanphammoi.classList.add('sanphamgh');
    var sps_giohang = document.getElementsByClassName('danhsachspgh')[0];
    var tens_sanphamgh = document.getElementsByClassName('tenspgh');
    for(var i = 0; i < tens_sanphamgh.length; i++) {
        if(tens_sanphamgh[i].innerText == ten_sanpham) {
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
function CapNhatSanPham() {
    var khoisp_giohang = document.getElementsByClassName('danhsachspgh')[0];
    var cacsp_giohang = khoisp_giohang.getElementsByClassName('sanphamgh');
    var tongtien = 0;
    var ssp = 0;
    for(var i = 0; i < cacsp_giohang.length; i++) {
        var motsp_giohang = cacsp_giohang[i];
        var gia = motsp_giohang.getElementsByClassName('giaspgh')[0];
        var sl = motsp_giohang.getElementsByClassName('soluong')[0];
        var tien_sp = gia.innerText.replace('Đ','');
        var tien_sp1 = parseFloat(tien_sp.replace(/,/g,''));
        var soluong_sp = sl.value;
        tongtien = tongtien + (tien_sp1 * soluong_sp);
        ssp ++;
    }
    document.getElementsByClassName('tongtien')[0].innerText = tongtien + ' Đ';
    document.getElementsByClassName('amount')[0].innerText = ssp;
}
// --END VIẾT JS CHO PHẦN THÊM VÀO GIỎ HÀNG 10/04/2019--
//-- VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --
function LaySoLuong() {
    var parent = this.parentNode;
    var sliders = parent.getElementsByTagName("input");
    var slider1 = parseFloat(sliders[0].value);
    var slider2 = parseFloat(sliders[1].value);
    if(slider1 > slider2) {
        var tmp = slider2;
        slider2 = slider1;
        slider1 = tmp;
    }
    var khoangtien = parent.getElementsByClassName('khoanggia')[0];
    khoangtien.innerHTML = slider1 + 'Đ' + ' - ' + slider2 + 'Đ';
}
//-- END VIẾT JS CHO PHẦN SLIDER SỐ LƯỢNG --