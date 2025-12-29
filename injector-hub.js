<script>
(function () {
  // evita injetar duas vezes
  if (window.__HUB_INJECTOR_ACTIVE__) return;
  window.__HUB_INJECTOR_ACTIVE__ = true;

  // botão flutuante
  const btn = document.createElement("div");
  btn.innerText = "◉ HUB";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "9999";
  btn.style.padding = "10px 14px";
  btn.style.background = "rgba(0,255,0,0.15)";
  btn.style.border = "1px solid #00ff00";
  btn.style.color = "#00ff00";
  btn.style.fontFamily = "monospace";
  btn.style.cursor = "pointer";
  btn.style.backdropFilter = "blur(4px)";

  // overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.92)";
  overlay.style.zIndex = "9998";
  overlay.style.display = "none";
  overlay.style.color = "#00ff00";
  overlay.style.fontFamily = "monospace";
  overlay.style.padding = "40px";
  overlay.style.boxSizing = "border-box";

  overlay.innerHTML = `
    <h2>HUB — ACESSO</h2>
    <p>Escolha um ponto.</p>
    <ul>
      <li><a href="https://github.com" target="_blank">GitHub</a></li>
      <li><a href="https://stackoverflow.com" target="_blank">StackOverflow</a></li>
      <li><a href="https://dev.to" target="_blank">Dev.to</a></li>
      <li><a href="https://www.freecodecamp.org" target="_blank">freeCodeCamp</a></li>
    </ul>
    <br>
    <span style="cursor:pointer;">[ fechar ]</span>
  `;

  overlay.querySelector("span").onclick = () => {
    overlay.style.display = "none";
  };

  btn.onclick = () => {
    overlay.style.display = "block";
  };

  document.body.appendChild(overlay);
  document.body.appendChild(btn);
})();
</script>
