document.addEventListener('DOMContentLoaded', function () {
    var nutcongs = document.getElementsByClassName('nutcong');
    var nuttrus = document.getElementsByClassName('nuttru');
    var soluongsps = document.getElementsByClassName('soluonghang');
    for (var i = 0; i < nutcongs.length; i++) {
        var nutcong = nutcongs[i];
        nutcong.addEventListener('click', NutCong);
    }
    for (var i = 0; i < nuttrus.length; i++) {
        var nuttru = nuttrus[i];
        nuttru.addEventListener('click', NutTru);
    }
    for (var i = 0; i < soluongsps.length; i++) {
        var soluongsp = soluongsps[i];
        soluongsp.addEventListener('change', ThayDoiSL)
    }
    var nutxoas = document.getElementsByClassName('xoasp');
    for(var i = 0; i < nutxoas.length; i++) {
        var nutxoa = nutxoas[i];
        nutxoa.addEventListener('click', Delete)
    }
    UpdateTongCong();
    CapNhat();
})
function Delete(event) {
    var nutxoa = event.target;
    nutxoa.parentElement.parentElement.parentElement.remove();
    CapNhat();
}
function NutCong(event) {
    var nutcong = event.target;
    var soluong = nutcong.parentElement.getElementsByClassName('soluonghang')[0];
    soluong.value ++;
    UpdateTongCong();
    CapNhat();
}
function NutTru(event) {
    var nuttru = event.target;
    var soluong = nuttru.parentElement.getElementsByClassName('soluonghang')[0];
    soluong.value --;
    if(soluong.value <= 0) {
        soluong.value = 1;
    }
    UpdateTongCong();
    CapNhat();
}
function ThayDoiSL(event) {
    var soluongsp = event.target;
    if(soluongsp.value <= 0) {
        soluongsp.value = 1;
    }
    UpdateTongCong();
    CapNhat();
}
function CapNhat() {
    var tonggt = document.getElementById('tonggt');
    var all_tr = document.querySelectorAll('tbody tr');
    var tienthanhtoan = 0;
    for(var i = 0; i < all_tr.length; i++) {
        var tmp = all_tr[i].getElementsByClassName('tongcongtsp')[0].innerHTML;
        tmp = tmp.replace(' đ','');
        tmp = tmp.split('.').join('');
        tmp = parseFloat(tmp);
        tienthanhtoan += tmp;
    }
    tienthanhtoan = tienthanhtoan.toLocaleString();
    tonggt.innerHTML = tienthanhtoan + ' đ';
}
function UpdateTongCong() {
    var all_tr = document.querySelectorAll('tbody tr');
    for(var i = 0; i < all_tr.length; i++) {
        var dongia = all_tr[i].getElementsByClassName('dongia')[0].innerHTML;
        var soluong = all_tr[i].getElementsByClassName('soluonghang')[0].value;
        var tongcongtsp = all_tr[i].getElementsByClassName('tongcongtsp')[0];
        dongia = dongia.replace(' đ','');
        dongia = dongia.split('.').join('');
        dongia = parseFloat(dongia);
        soluong = parseInt(soluong);
        var tmp = dongia * soluong;
        tmp = tmp.toLocaleString() + ' đ';
        tongcongtsp.innerHTML = tmp;
    }
}