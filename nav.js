/* =====================================================================
   HỌC LIỆU SỐ MÔN TIẾNG ANH - TRƯỜNG THPT GIA VIỄN B - GIÁO VIÊN: HUỆ ANH
   File điều hướng dùng chung (nav.js) – đặt trong kho "hoc-lieu-so".
   Mỗi trang học liệu chỉ cần 1 dòng trước </body>:
   <script src="https://jasminelaguna-eng.github.io/hoc-lieu-so/nav.js" defer></script>

   ➜ Khi có bài mới / đổi link: CHỈ SỬA DANH SÁCH DƯỚI ĐÂY, mọi trang tự cập nhật.
   ➜ url để trống "" = bài chưa đưa lên (hiện chữ "Đang cập nhật", không bấm được).
   ===================================================================== */
window.HLS_HUB = "https://jasminelaguna-eng.github.io/hoc-lieu-so/";
window.HLS_RESOURCES = [
  { icon:"📘", tag:"Đọc hiểu", title:"Reading Block 1",
    desc:"Luyện đọc hiểu theo cấu trúc đề thi TN THPT – Block 1.",
    url:"" },
  { icon:"📗", tag:"Đọc hiểu", title:"Reading Block 2", note:"Đang cập nhật",
    desc:"Luyện đọc hiểu theo cấu trúc đề thi TN THPT – Block 2.",
    url:"" },
  { icon:"📙", tag:"Đọc hiểu", title:"Reading Block 3",
    desc:"Luyện đọc hiểu theo cấu trúc đề thi TN THPT – Block 3.",
    url:"" },
  { icon:"📕", tag:"Đọc hiểu", title:"Reading Block 4+5",
    desc:"Rèn kỹ năng đọc hiểu bài thi TN THPT (GDPT 2018) – sản phẩm STEM lớp 12A10. Đăng nhập bằng mã học sinh.",
    url:"https://jasminelaguna-eng.github.io/ren-ky-nang-doc-hieu-12A10/" },
  { icon:"🧩", tag:"Sắp xếp câu", title:"Paragraph & Letter Arrangement",
    desc:"Sắp xếp thư tín (2 bộ) và đoạn văn cơ bản, nâng cao, mô tả biểu đồ – bút highlight, thi thử 15 phút, phân tích chi tiết.",
    url:"https://jasminelaguna-eng.github.io/sap-xep-thu-doan-van/" }
];

(function(){
  if (window.HLS_IS_HUB || document.getElementById("hls-nav")) return;
  var R = window.HLS_RESOURCES, HUB = window.HLS_HUB;
  var here = location.href.split("#")[0].split("?")[0];
  function isHere(u){ return u && here.indexOf(u.replace(/index\.html$/,"")) === 0; }
  function okLeave(){ return typeof window.HLS_confirmLeave !== "function" || window.HLS_confirmLeave(); }

  var css = document.createElement("style");
  css.textContent =
    "#hls-nav{position:fixed;left:12px;bottom:12px;z-index:2147483000;display:flex;gap:6px;align-items:flex-end;font-family:Arial,Helvetica,sans-serif;font-size:13px}" +
    "#hls-nav .hb{border:1.5px solid #1f4e9c;border-radius:999px;padding:7px 12px;font-weight:700;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.2);text-decoration:none;line-height:1.2;font-size:13px}" +
    "#hls-nav .hb.p{background:#1f4e9c;color:#fff}#hls-nav .hb.s{background:#fff;color:#1f4e9c}" +
    "#hls-menu{position:absolute;left:0;bottom:44px;background:#fff;border:1px solid #cfd8e6;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.2);min-width:260px;max-width:86vw;padding:6px;display:none}" +
    "#hls-menu.on{display:block}#hls-menu .t{font-size:11.5px;color:#5d6779;padding:6px 10px 4px;font-weight:700;text-transform:uppercase;letter-spacing:.3px}" +
    "#hls-menu a,#hls-menu span.d{display:block;padding:8px 10px;border-radius:8px;color:#1d2433;text-decoration:none}" +
    "#hls-menu a:hover{background:#e8f0fd}#hls-menu a.cur{background:#e8f0fd;font-weight:700;color:#1f4e9c}" +
    "#hls-menu span.d{color:#9aa3b2;cursor:not-allowed}#hls-menu small{color:#c0392b;font-weight:700}" +
    "@media print{#hls-nav{display:none}}";
  document.head.appendChild(css);

  var box = document.createElement("div"); box.id = "hls-nav";
  var items = R.map(function(r){
    var label = r.icon + " " + r.title;
    if (!r.url) return '<span class="d">' + label + ' <small>(' + (r.note || "Đang cập nhật") + ')</small></span>';
    return '<a href="' + r.url + '"' + (isHere(r.url) ? ' class="cur"' : '') + '>' + label + (isHere(r.url) ? ' ✔' : '') + (r.note ? ' <small>(' + r.note + ')</small>' : '') + '</a>';
  }).join("");
  box.innerHTML =
    '<a class="hb p" href="' + HUB + '" id="hls-home">🏠 Học liệu số</a>' +
    '<div style="position:relative"><button type="button" class="hb s" id="hls-sw">📂 Chuyển bài ▾</button>' +
    '<div id="hls-menu"><div class="t">Học liệu số môn Tiếng Anh</div>' + items + '</div></div>' +
    '<button type="button" class="hb s" id="hls-back">↩ Quay lại</button>';
  document.body.appendChild(box);

  var menu = document.getElementById("hls-menu");
  document.getElementById("hls-sw").onclick = function(e){ e.stopPropagation(); menu.classList.toggle("on"); };
  document.addEventListener("click", function(e){ if (!box.contains(e.target)) menu.classList.remove("on"); });
  box.addEventListener("click", function(e){
    var a = e.target.closest ? e.target.closest("a") : null;
    if (a && !okLeave()) e.preventDefault();
  });
  document.getElementById("hls-back").onclick = function(){
    if (!okLeave()) return;
    if (document.referrer && history.length > 1) history.back(); else location.href = HUB;
  };
})();
