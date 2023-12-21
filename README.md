# PrimeTile(Web簡易版) 概要
[プレイはここから](https://misodango.github.io/PrimeTile/)

このゲームは，タイルを駆使して数字を作り，素因数分解を楽しむゲームです．

部活でPygameを用いて作ったもののWeb版になっています．

中の人がHTML,CSS,JavaScript,Vueを学ぶために作ってみただけのものなので，クオリティは高くないです．

## 遊び方
あなたはタイルをクリックし，素数を頑張って作ります．

$`6\times6`$のタイルがあります．各行を1つの2進法表記の数値として扱います．

白タイルを0, 黒タイルを1とします．
たとえば，
<p>
 &#x2b1c;&#x2b1c;&#x2b1c;&#x2b1b;&#x2b1b;&#x2b1b;
</p>

これは$`(000111)_2`$となり，$`7`$です．

49を入力したいときは
<p>
&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1b;&#x2b1b;&#x2b1b;<br>
&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1b;&#x2b1b;&#x2b1b;<br>
&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;<br>
&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;<br>
&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;&#x2b1c;<br>
</p>

$`7 \times 7=49`$となります．(何も入力していない行は無視されます)

また，順番が変わっていても問題ないです．


タイルをクリックすると白と黒が反転します．

また，素数でない数を作った場合は赤くなります．
<p>
 &#x2b1c;&#x2b1c;&#x2b1c;&#x1f7e5;&#x1f7e5;&#x2b1c;
</p>

これは$`(000110)_2`$となり，$`6`$です．

## ボタン

### Create Problem ボタン
問題が生成されます.
32以上の素因数を含む問題が出たら対応できないので，新しく作り直してください．

(32以上の素因数をはじくことは技術的に可能ですが，そのうち可変長タイルにしたいので今はこのままにしています．)

<button>Create problem</button>


### Reset Tile ボタン
ボタンを押すとタイルがリセットされます．問題はそのままです．

<button>Reset Tile</button>


### 割る! ボタン
試し割り，解答ができます．

素因数の個数が6個以上の場合，これを押すことで6個以上の素因数でも対応できるようになります．
合成数が含まれていたり，間違っているとalertが表示されます．

正解だとalertが表示され，次の問題が自動で生成され，タイルがリセットされます．

<button>割る！</button>


# おわり
ぜひ遊んでみてください

[プレイはここから](https://misodango.github.io/PrimeTile/)