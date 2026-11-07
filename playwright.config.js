import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: true,
  },
  webServer: {
    command: 'node -e "const http=require(\'http\'),fs=require(\'fs\'),path=require(\'path\');const m={\'.html\':\'text/html;charset=utf-8\',\'.css\':\'text/css\',\'.js\':\'application/javascript\',\'.png\':\'image/png\'};http.createServer((q,s)=>{let u=q.url.split(\'?\')[0];if(u===\'/\')u=\'/index.html\';const p=path.join(process.cwd(),u);fs.readFile(p,(e,d)=>{if(e){s.writeHead(404);s.end();}else{s.writeHead(200,{\'Content-Type\':m[path.extname(p)]||\'application/octet-stream\'});s.end(d);}});}).listen(4173,\'127.0.0.1\');"',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: true,
  },
});
