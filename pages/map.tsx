import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch"
import dynamic from 'next/dynamic'

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls()

  return (
    <div className="tools" style={{ height: 24 }}>
      <button onClick={() => zoomIn()}>+</button>
      <button onClick={() => zoomOut()}>-</button>
      <button onClick={() => resetTransform()}>x</button>
    </div>
  )
}

const Example = () => {
  return (
    <TransformWrapper initialScale={1} minScale={0.75} maxScale={3}>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div style={{ height: "100%", overflowY: "hidden" }}>
          <Controls />
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: parseInt(getComputedStyle(document.body).getPropertyValue("--100vw")) <= 700 ? "calc(var(--100vh) - 88px)" : "100%"
            }}
          >
            <div style={{ width: 1000, margin: 24 }}>

              <dl>
                <dt><span id="プログレッシブ（あらすじ）"></span>プログレッシブ</dt>
                <dd>前日譚 収録巻：『プログレッシブ』第1巻 -</dd>
                <dd>デスゲームの開始から1か月、アインクラッドではすでに約2千人ものプレイヤーが死亡していた。誰も第1層を突破できずにベータテスターと一般プレイヤーの確執ばかりが深まる中、騎士を自称するプレイヤーであるディアベルの主導により、ついに初めてのボス攻略が行われることになる。そして、キリトはその第1回ボス攻略会議の席にて成り行きから助けた少女アスナとコンビを組む。</dd>
                <dd>しかし、フロアボスとの戦いによってディアベルが戦死した結果、キリトはベータテスターと一般プレイヤーの対立を鎮めるために「ビーター」の汚名を名乗ることを余儀なくされ、象徴を失った攻略プレイヤーたちも攻略方針の違いから2つの派閥に分かれてしまう。さらには裏から派閥対立を煽り、プレイヤーたちに<a href="/wiki/%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%AD%E3%83%A9%E3%83%BC" title="プレイヤーキラー">プレイヤーキル</a>（PK）、つまり殺人の一線を越えさせんとする「煽動PK集団」の影までもが見え隠れする。</dd>
                <dd>キリトとアスナは攻略集団の中で微妙な立場に置かれながらも、対立と煽動PK集団の暗躍によって危うい舵取りを強いられる派閥間の調整に奔走すると同時に、自らもアインクラッドの攻略に挑んでいく。</dd>
                <dd></dd>
                <dt>アインクラッド編</dt>
                <dd>第1部 収録巻：第1巻 - 第2巻 / 第8巻（一部）/ 第22巻（一部）</dd>
                <dd>茅場晶彦によるデスゲームの開始から約2年近くが経過し、最前線は第74層まで達したものの、生存者は約6千人まで減っていた。</dd>
                <dd>最強ギルド「血盟騎士団」の副団長となったアスナとのコンビを解消したキリトは、数々の出会いと別れを繰り返しながら孤独なソロプレイヤーとして最前線で戦い続けていた。そんなある日、偶然にもアインクラッドで貴重とされるS級食材を手に入れたキリトは、それをきっかけに久々にアスナとパーティを組み、再び心を通わせていく。それこそが、「SAO事件」最後の3週間の始まりであった。</dd>
                <dd></dd>
                <dt>フェアリィ・ダンス編</dt>
                <dd>第2部 収録巻：第3巻 - 第4巻 / 第22巻（一部）</dd>
                <dd>SAOがクリアされて約2か月が経過した2025年1月。キリトこと桐ヶ谷和人が現実世界へ帰還していたのに対し、SAOにて心を通わせたアスナこと結城明日奈は帰還することなく病院のベッドにて眠り続けていた。同様に、300人ものプレイヤーが意識を失ったまま眠り続けており、初期化されるはずのSAOサーバーも不可解な稼動を続けているという。</dd>
                <dd>この現状に乗じ、明日奈の父が経営する総合電子機器メーカー「レクト」の社員にしてSAOサーバーの維持管理担当者である<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#須郷伸之" title="ソードアート・オンラインの登場人物">須郷伸之</a>は、強引に明日奈を妻にしようと目論む。自らの無力感に苛まれる和人は、妖精たちの<a href="/wiki/%E3%83%95%E3%82%A1%E3%83%B3%E3%82%BF%E3%82%B8%E3%83%BC" title="ファンタジー">ファンタジー</a>世界を舞台としたハイスペックVRMMORPG「<b>アルヴヘイム・オンライン</b>」（ALO）の中でアスナらしき人物が目撃されたという情報を得る。</dd>
                <dd>真実を確かめるために再び仮想世界へダイブした和人は、かつてSAOで共に暮らした「娘」のユイやALOへのダイブ直後に出会った剣士のリーファと共に、ALOの中心「世界樹」の攻略を目指す。</dd>
                <dd></dd>
                <dt>ファントム・バレット編</dt>
                <dd>第3部 収録巻：第5巻 - 第6巻</dd>
                <dd>SAOがクリアされて1年後の2025年12月。和人は救出した明日奈やかつての仲間たちと共に、ALOの世界を生きていた。そんなある日、和人は、SAO事件で顔見知りとなった総務官僚の菊岡誠二郎から、銃撃戦が繰り広げられる銃器と鋼鉄のVRMMORPG「<b>ガンゲイル・オンライン</b>」（GGO）に出没した謎のプレイヤーである死銃（デス・ガン）が関わるとされる連続変死事件の調査を依頼される。</dd>
                <dd>真相を究明するべくGGOへダイブした和人は、ログイン直後に知り合った少女のシノンからこの世界についてのレクチャーを受けつつ、死銃との接触を図るべく最強のガンナーを決める大会「バレット・オブ・バレッツ」（BoB）に参加する。これまでとまったく勝手の違う銃器世界での戦いにキリトは苦戦するが、持ち前の剣技と反射神経、センスを駆使しながら勝ち抜いていく。やがて一連の事件の真実に迫る中、キリトはSAO時代に対峙した<a href="/wiki/%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%AD%E3%83%A9%E3%83%BC" title="プレイヤーキラー">PK（プレイヤーキラー）</a>集団 「ラフィン・コフィン」 との忌まわしき因縁と対峙することになる。</dd>
                <dd></dd>
                <dt>キャリバー編</dt>
                <dd>外伝 収録巻：第8巻（一部）</dd>
                <dd>2025年12月28日の朝、和人と直葉は「MMOトゥモロー」の一面を飾った「聖剣エクスキャリバー」発見の知らせを目撃する。新生アインクラッド攻略にかまけてヨツンヘイム攻略をおろそかにしていた和人は、これを機に「聖剣エクスキャリバー」獲得を目指す。しかし、ヨツンヘイムへ降りたキリト達が目にしたのは巨人型邪神と共闘して象水母型邪神を狩るレイドパーティーという奇妙な光景であった。</dd>
                <dd></dd>
                <dt>マザーズ・ロザリオ編</dt>
                <dd>外伝 収録巻：第7巻</dd>
                <dd>「死銃事件」から数週間後の2026年1月。アスナはリズベットたちから「絶剣」と呼ばれる凄腕の剣士がALOに現れたことを聞く。その剣士は自らの「オリジナル・ソードスキル」を賭け、1対1の「デュエル」の相手を募集しているらしい。キリトすら撃ち破ったその腕と剣技に興味を持ったアスナは自分も「絶剣」ことユウキに勝負を挑むが、熱戦の末に敗れてしまう。その後、アスナは親しくなったユウキから彼女がリーダーを務めるギルド「スリーピング・ナイツ」を紹介され、他のメンバーとも打ち解け始める。しかし、「スリーピング・ナイツ」のメンバーにはある悲しい秘密が隠されていたのだった。</dd>
                <dd></dd>
                <dt><span id="オーディナル・スケール（あらすじ）"></span>オーディナル・スケール</dt>
                <dd>劇場アニメ 原作未収録</dd>
                <dd>2026年4月。「ナーヴギア」をその後継VRマシン「アミュスフィア」がとって代わったかのように、<a href="/wiki/%E6%8B%A1%E5%BC%B5%E7%8F%BE%E5%AE%9F" title="拡張現実">AR</a>マシン「オーグマー」という次世代ウェアラブル・マルチデバイスが発売された。「オーグマー」は覚醒状態で使用することができる安全性とその利便性から瞬く間にユーザーを増やし、ARアイドルの<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#ユナ" title="ソードアート・オンラインの登場人物">ユナ</a>の存在と「オーグマー」専用のARMMORPG「<b>オーディナル・スケール</b>」（OS）もその人気を後押ししていた。</dd>
                <dd>キリトの仲間たちも「オーグマー」を日常やゲームによく活用してOSに参戦する中、キリト本人はこの新しい機器に乗り気ではなく、OSもあまりプレイしてはいなかった。そんな中、OSに旧SAOのボスモンスターが現れるという噂が流れ始める。アスナに連れられてOSをプレイしたキリトが目の当たりにしたものは、旧アインクラッド第10層のボスモンスター「カガチ・ザ・サムライロード」だった。</dd>
                <dd>現実世界を舞台に、多くのSAO帰還者たちを巻き込んだ悲しき陰謀が幕を開ける。</dd>
                <dd></dd>
                <dt>アリシゼーション編</dt>
                <dd>第4部（人界編） 収録巻：第9巻 - 第14巻</dd>
                <dd>GGOで起きた「死銃事件」から半年が経った2026年6月。和人は菊岡からの紹介で、謎多きベンチャー企業「<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#ラース" title="ソードアート・オンラインの登場人物">ラース</a>」の開発した次世代フルダイブ実験機「ソウル・トランスレーター」のテストダイバーのアルバイトを行っていた。ある日、和人は「ダイシー・カフェ」での談笑からの帰りに「死銃事件」の実行犯最後の1人によって薬剤を注射され、昏睡状態に陥ってしまう。和人が目を覚ました時、眼前には現実世界と遜色なく豊かな感性を持つNPCたちが住まう仮想世界「<b>アンダーワールド</b>」（UW）が広がっていた。ログアウト不可という旧SAOと同じ状況に際したキリトは現実世界への道を求め、親しくなった少年・ユージオと共に世界の中心「<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#セントラル・カセドラル" title="ソードアート・オンラインの登場人物">セントラル・カセドラル</a>」を目指す。</dd>
                <dd>一方、現実世界の和人は搬送先の病院から昏睡状態のまま連れ出され、行方不明になっていた。明日奈たちは和人の行方の手がかりを求め、藁をも掴む思いで茅場の恋人だった<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#神代凛子" title="ソードアート・オンラインの登場人物">神代凛子</a>にコンタクトを取り、「ラース」に潜入する。そこで菊岡の口から明かされたのは、UWの根幹にある<a href="/wiki/%E3%83%88%E3%83%83%E3%83%97%E3%83%80%E3%82%A6%E3%83%B3%E8%A8%AD%E8%A8%88%E3%81%A8%E3%83%9C%E3%83%88%E3%83%A0%E3%82%A2%E3%83%83%E3%83%97%E8%A8%AD%E8%A8%88" title="トップダウン設計とボトムアップ設計">ボトムアップ</a>型人工知能開発計画「<b>プロジェクト・アリシゼーション</b>」だった。</dd>
                <dd></dd>
                <dt>アリシゼーション新章 アンダーワールド大戦編</dt>
                <dd>第4部新章（大戦編） 収録巻：第15巻 - 第18巻</dd>
                <dd>人界の民を恐るべき兵器に変えようとしていた「セントラル・カセドラル」と人界の支配者にしてシステム管理者である<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#アドミニストレータ" title="ソードアート・オンラインの登場人物">アドミニストレータ</a>との戦いに辛勝を収めたキリトの代償は、ユージオの死と自身の精神喪失であった。キリトと共闘した「<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#整合騎士" title="ソードアート・オンラインの登場人物">整合騎士</a>」のアリスは彼を連れ、ルーリッドの村はずれでひっそりと暮らしていた。しかし、人界とダークテリトリーの全面戦争が近いことを知ったアリスはキリトを連れ、戦場へ向かう。</dd>
                <dd>一方、現実世界ではUWが存在する施設「オーシャンタートル」が謎の襲撃者たちによって占拠されていた。明日奈はキリトに加え、完全な人工知能として覚醒したアリスを救うため、UWへのログインを決意する。そして、襲撃者たちを率いて人間の魂を求める<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#ガブリエル・ミラー" title="ソードアート・オンラインの登場人物">ガブリエル</a>も闇の皇帝ベクタとしてUWへログインし、アリスを奪うべく人界への侵攻を始める。これに対抗するアリスら人界軍は戦力差に押されるが、創世神ステイシアとして降り立ったアスナの参戦によって持ち直す。</dd>
                <dd>しかし、外国のVRMMOプレイヤーを大量投入するという策によって両軍は混乱させられ、その隙を突いたガブリエルによってアリスは拉致されてしまい、人界軍とダークテリトリー軍は一時休戦してこれに対処するも次第に追い込まれていく。そこに現れたのは、同じく女神と化したリーファとシノン、ユイの願いに応じて救援に駆けつけたクラインたち日本のVRMMOプレイヤーたちだった。</dd>
                <dd>再び戦況が覆る中、今度はガブリエルの部下である<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#ヴァサゴ・カザルス" title="ソードアート・オンラインの登場人物">ヴァサゴ</a>ことSAO最悪の殺人鬼であった<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#PoH" title="ソードアート・オンラインの登場人物">PoH</a>が新たな戦力を率い、アスナたちを心身ともに追い詰めていく。</dd>
                <dd></dd>
                <dt>ムーン・クレイドル編</dt>
                <dd>第4部外伝 収録巻：第19巻 - 第20巻</dd>
                <dd>大戦が終結して1つになったUWでは、人界と暗黒界の人々が交流を始めていた。人界側の代表になっていたキリトはこの平和が長続きしないことを予想し、争いを回避すべく現実世界の先進技術をUWに伝えていた。</dd>
                <dd>そんな中、もう起こるはずがない殺人事件が起こってしまう。この事態に際し、キリトは整合騎士見習いとなった後輩騎士の<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#ロニエ・アラベル" title="ソードアート・オンラインの登場人物">ロニエ</a>を伴って捜査を開始する。</dd>
                <dd></dd>
                <dt>ユナイタル・リング編</dt>
                <dd>第5部 収録巻：第21巻 -</dd>
                <dd>キリトとアスナがUWから現実世界へ帰還して1か月半後。ALOのログハウスにいるキリトとアスナの傍らには現実世界での身体を得たアリスの姿があったが、謎のゲーム「<b>ユナイタル・リング</b>」（UR）へ突如強制コンバートされてしまう。強制コンバートは百を超える仮想世界から数十万人におよび、過酷な<a href="/wiki/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89" title="オープンワールド">オープンワールド</a>・サバイバルゲームが幕を開ける。</dd>
                <dd>時を同じくして、キリトはUWに正体不明の人物が侵入したとの情報を得る。ディープ・フリーズ中のアリスの妹・<a href="/wiki/%E3%82%BD%E3%83%BC%E3%83%89%E3%82%A2%E3%83%BC%E3%83%88%E3%83%BB%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AE%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9#セルカ・ツーベルク" title="ソードアート・オンラインの登場人物">セルカ</a>を蘇らせたいという目的もあり、キリトやアスナ、アリスらはURの攻略とUWの問題解決を同時進行で進める。</dd>
              </dl>
              <button onClick={() => alert("Pushed!!!!!!!!!!")}>Push</button>

            </div>
          </TransformComponent>
        </div>
      )}
    </TransformWrapper>

  )
}

export default dynamic(() => Promise.resolve(Example), {
  ssr: false
})
