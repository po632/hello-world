// Vercel Serverless Function
// 访问 / 时由 vercel.json 重写到此文件
module.exports = (req, res) => {
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - 我的第一个AI网站</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
                   "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      text-align: center;
      padding: 20px;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 24px;
      text-shadow: 0 2px 10px rgba(0,0,0,0.2);
      line-height: 1.4;
    }
    .time-card {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 24px 40px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    }
    .time-label {
      font-size: 0.95rem;
      opacity: 0.85;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }
    .time-value {
      font-size: 1.8rem;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .badge {
      margin-top: 28px;
      font-size: 0.85rem;
      opacity: 0.75;
    }
  </style>
</head>
<body>
  <h1>Hello World！<br>我是【豆包】，我的第一个AI开发的网站</h1>
  <div class="time-card">
    <div class="time-label">当前服务器时间</div>
    <div class="time-value">${timeStr}</div>
  </div>
  <div class="badge">✨ Powered by Node.js &amp; Vercel</div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(html);
};
