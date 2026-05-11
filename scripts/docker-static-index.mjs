import fs from "node:fs";
import path from "node:path";

const clientDir = path.join(process.cwd(), "dist", "client");
const assetsDir = path.join(clientDir, "assets");

function pickLargestIndexJs() {
  const files = fs.readdirSync(assetsDir).filter((f) => /^index-[A-Za-z0-9_-]+\.js$/.test(f));
  if (!files.length) {
    throw new Error(`No index-*.js found in ${assetsDir}`);
  }
  let best = files[0];
  let bestSize = -1;
  for (const f of files) {
    const size = fs.statSync(path.join(assetsDir, f)).size;
    if (size > bestSize) {
      bestSize = size;
      best = f;
    }
  }
  return best;
}

function pickStylesCss() {
  const files = fs.readdirSync(assetsDir).filter((f) => f.startsWith("styles-") && f.endsWith(".css"));
  if (!files.length) {
    throw new Error(`No styles-*.css found in ${assetsDir}`);
  }
  if (files.length > 1) {
    files.sort((a, b) => fs.statSync(path.join(assetsDir, b)).size - fs.statSync(path.join(assetsDir, a)).size);
  }
  return files[0];
}

const js = pickLargestIndexJs();
const css = pickStylesCss();

const html = `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>elasnix.ai — Engineering Intelligent Digital Platforms</title>
    <meta
      name="description"
      content="elasnix.ai builds AI-native enterprise platforms with Agentic AI, Kubernetes, DevOps, cloud-native infrastructure, and cybersecurity."
    />
    <link rel="stylesheet" crossorigin href="/assets/${css}" />
  </head>
  <body>
    <script>
      (function () {
        function showError(label, err) {
          try {
            var pre = document.createElement('pre');
            pre.style.cssText = 'position:fixed;inset:0;z-index:99999;padding:16px;margin:0;overflow:auto;background:#0b1020;color:#ffd6d6;font:12px/1.4 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;white-space:pre-wrap;';
            pre.textContent = label + '\\n\\n' + String(err && (err.stack || err.message) || err);
            document.body.appendChild(pre);
          } catch (_) {}
        }
        window.addEventListener('error', function (e) { showError('Runtime error', e.error || e.message); });
        window.addEventListener('unhandledrejection', function (e) { showError('Unhandled promise rejection', e.reason); });
      })();
    </script>
    <script type="module" crossorigin src="/assets/${js}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, "index.html"), html, "utf8");
console.log(`Wrote dist/client/index.html (entry /assets/${js}, styles /assets/${css})`);
