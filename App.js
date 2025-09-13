if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', App);
}
else {
    App();
}
function App() {
    //dùng thư viện hiệu ứng khi scroll đến 1 phần tử
    new WOW().init();
    // end dùng thư viện hiệu ứng khi scroll đến 1 phần tử
    // --VIẾT JS CHO PHẦN SCROLL 05/04/2019--
    var khoitop = document.querySelector('.khoitop');
    var menu = document.querySelector('.mnu');
    var search = document.querySelector('.formtimkiem');
    var lendau = document.querySelector('.lendau');
    lendau.addEventListener('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800)
    })
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 30) {

            khoitop.classList.add('dinh1');

        }
        else {

            khoitop.classList.remove('dinh1');

        }
        if (window.pageYOffset > 50) {
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



    // --VIẾT JS CHO PHẦN CLICK VÀO GIỎ HÀNG 10/04/2019--
    var giohang = document.getElementsByClassName('cart')[0];
    var nut_closse = document.getElementsByClassName('cl')[0];
    var khoigiohang = document.getElementsByClassName('giohang')[0];
    giohang.addEventListener('click', function () {
        khoigiohang.classList.remove('traive');
        khoigiohang.classList.add('phaisang');
    })
    nut_closse.addEventListener('click', function () {
        khoigiohang.classList.remove('phaisang');
        khoigiohang.classList.add('traive');
    })
    // --END VIẾT JS CHO PHẦN CLICK VÀO GIỎ HÀNG--

    //--VIẾT JS CHO PHẦN THANH TOÁN
    var nutthanhtoan = document.querySelector('.thanhtoan');
    nutthanhtoan.addEventListener('click', Thanhtoan);
}
function Thanhtoan() {
    var khoisp_giohang = document.querySelector('.danhsachspgh');
    var cacsp_giohang = khoisp_giohang.getElementsByClassName('sanphamgh');
    if (cacsp_giohang.length == 0) {
        alert('Bạn chưa mua sản phẩm nào !');
    }
    else {
        for (var i = cacsp_giohang.length - 1; i > -1; i--) {
            cacsp_giohang[i].remove();
        }
        document.getElementsByClassName('tongtien')[0].innerText = 0 + ' đ';
        document.getElementsByClassName('amount')[0].innerText = 0;
        alert('Cảm ơn bạn đã mua hàng !');
    }
}