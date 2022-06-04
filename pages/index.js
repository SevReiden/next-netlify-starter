import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GrandRp Vagos storys</title>
        <link rel="icon" href="/image.png" />
      </Head>

      <main>
      <h3>Select a story:</h3>
    <select size="1" name="story1" id="storys1" onchange="storyChanged(this);">
        <option value="story_1" >Bigfoot</option>
        <option value="story_2">Space Ranger</option>
        <option value="story_3">comming soon</option>
        <option value="story_4">comming soon</option>
        <option value="none" SELECTED>None</option>
        
    </select>
    <br></br>
    <h2 id="Idee">Idee:</h2><br></br>
    <h2 id="RP">RP:</h2><br></br>
    <h2 id="Flucht">Flucht:</h2>
      </main>

      <Footer />
    </div>
  )
}

function storyChanged(el) {
  window["display_" + el.options[el.selectedIndex].value]();
}

function display_story_1() {
  document.getElementById('Idee').textContent = "Idee: Der Mythos Bigfoot ist wahr";
  document.getElementById('RP').textContent  = "RP: 1 Person als bigfoot mit stimmverzehrer die aus human Labs geflüchtet ist. An bigfoot wurden Experimente durchgeführt wo durch er jetzt halb Affe und Mensch ist wo durch  er reden kann. Vagos hat ihn gefunden und will ihn beschützen das ihn nichts mehr passiert weil es ein Vagos member ist der seit Jahren verschollen ist";
  document.getElementById('Flucht').textContent = "Flucht: es wird um bigfoot verhandelt das er mit denn cops mit kommt und von dehnen beschützt wird alle cops ziehen ab Vagos wartet bis die weg sind und Baut die Sachen vor Ort ab und gewinnt da durch ";
}

function display_story_2() {
  document.getElementById('Idee').textContent = "Idee: space Ranger die die Aliens jagen die wir wahren";
  document.getElementById('RP').textContent  = "RP: wir sind auf der Erde gelandet und wollen die Aliens haben die gestern da wahren weil sie wichtige Informationen gestohlen haben";
  document.getElementById('Flucht').textContent = "Flucht: noch kein Plan";
}
function display_story_3() {
  
}
function display_story_4() {
  
}

function display_none() {
  document.getElementById('Idee').textContent = "";
  document.getElementById('RP').textContent = "";
  document.getElementById('Flucht').textContent = "";
}
