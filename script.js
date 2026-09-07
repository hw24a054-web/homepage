function openContact() {
    document.getElementById("contactModal").style.display = "flex";
}

function closeContact() {
    document.getElementById("contactModal").style.display = "none";
}

// メニューを開く
function openMenu() {
    document.getElementById("menuPanel").classList.add("open");
}

// メニューを閉じる
function closeMenu() {
    document.getElementById("menuPanel").classList.remove("open");
}