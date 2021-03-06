function refreshServerInfo(){
  const req = new XMLHttpRequest();
  req.addEventListener('load', function(){
    // this.responseTextがJSONデータを含む文字列.
  　// JSON.parseを使ってオブジェクトに変換する.
  const data = JSON.parse(this.responseText);

  // <div>('serverInfo'のクラスをもつもの)のテキストを置換する.
  const serverInfo = document.querySelector('.serverInfo');

  // サーバーから返されたオブジェクトの全てのキーについて処理を行う(platform,nodeVersion,uptime)
    Object.keys(data).forEach(p => {
      // プロパティがマッチする要素を探す.
      const replacements = serverInfo.querySelectorAll(`[data-replace="${p}"]`);
      // 値を置換する.
      for(let r of replacements) {
        r.textContent = data[p];
      }
    });
    console.log(this.responseText);
  });
  req.open('GET', 'http://localhost:7070', true);
  req.send();
}
// refreshServerInfo();
setInterval(refreshServerInfo, 200); //自動更新
