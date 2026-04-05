const el = document.getElementById('versions');
if (el && window.versions) {
  el.textContent = `Electron ${window.versions.electron()}  ·  Node ${window.versions.node()}  ·  Chrome ${window.versions.chrome()}`;
}
