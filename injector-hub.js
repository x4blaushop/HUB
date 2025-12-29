(function () {
  // evita injetar duas vezes
  if (window.__HUB_INJECTOR_ACTIVE__) return;
  window.__HUB_INJECTOR_ACTIVE__ = true;

  // cria botão flutuante
  const btn = document.createElement("div");
  btn.innerText = "◉ HUB";

  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  btn.style.padding = "10px 14px";
  btn.style.background = "rgba(0, 255, 0, 0.15)";
  btn.style.border = "1px solid #00ff00";
  btn.style.color = "#00ff00";
  btn.style.fontFamily = "monospace";
  btn.style.fontSize = "14px";
  btn.style.cursor = "pointer";
  btn.style.borderRadius = "4px";
  btn.style.backdropFilter = "blur(4px)";

  // ação
  btn.onclick = function () {
    window.open("https://x4blaushop.github.io/HUB/", "_blank");
  };

  document.body.appendChild(btn);
})();
