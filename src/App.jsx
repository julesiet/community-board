import "./App.css";
import Card from "./components/Card";

const App = () => {

  return (
    <>
      <h1 className="fronthead"> jules' music page! 🎧 </h1>
      <div className="subhead"> hi! my name is jules and though coding this project was both enjoyable to learn and put together on my own, music has ALWAYS BEEN one of my favorite things to share :) here are currently some of my albums that are in my rotation! </div>
        <div className="page-container">
          <Card image="../src/assets/Malcolm Todd - Self Titled.jpeg" title="Self Titled // Malcolm Todd" desc="refreshingly new indie pop that stands out unlike any project i've heard in recent years" out="https://open.spotify.com/album/6IkS2cDHxaYVkJueCPSdFs?si=MaoDUgUBSZC6nef0Pc49qQ" />
          <Card image="../src/assets/Mk.gee - Two Star & The Dream Police.jpeg" title="Two Star & The Dream Police // Mk.gee" desc="bold, electrifying and experimental: THE definition of genre-bending, atmospherically beautiful" out="https://open.spotify.com/album/6DlLdXBGCsSDPOV8R2pCl7?si=xveEgIA9TPShPnZ15Wv02A" />
          <Card image="../src/assets/Omar Apollo - Apolonio.jpeg" title="Apolonio // Omar Apollo" desc="if an album for longing for someone was mixed with wonky guitars and vocal effects" out="https://open.spotify.com/album/7HlxxaJOHK0ArY4Ae4Qfc7?si=5q_HSWGcSlynpvTKPiuNIQ" />
          <Card image="../src/assets/Kyle Dion - SUGA.jpeg" title="SUGA // Kyle Dion" desc="funky basslines and drum hits that are out of this world (in other words, GET UP AND GROOVE!)" out="https://open.spotify.com/album/5E5QGOClKXPXlVwOW9cWUz?si=r_PbcG4iR3GpeimN0bzFuQ" />
          <Card image="../src/assets/SAILORR - FROM FLORIDA'S FINEST.jpeg" title="FROM FLORIDA'S FINEST // SAILORR" desc="a cute, fun, and sexy mix of rap + rnb that is a joy to listen to all the way through" out="https://open.spotify.com/album/4KUlLprpCrNpRDsXC4MOAV?si=4bEaqyfbS_GQffODvAP2qQ" />
          <Card image="../src/assets/The Weeknd - Dawn FM.jpeg" title="Dawn FM // The Weeknd" desc="futuristic concept album fronted with synths, electronic drums and spacey vocals - truly dystopian" out="https://open.spotify.com/album/2nLOHgzXzwFEpl62zAgCEC?si=mG3UOdMZSsizklrdMIMAtA" />
          <Card image="../src/assets/grentperez - Backflips in a Restaurant.jpeg" title="Backflips in a Restaurant // grentperez" desc="singer-songwriter indie pop with acoustics + raw vocals that are both whimsical and emotional" out="https://open.spotify.com/album/3IKIobUDlcwhEs0tGJaLc7?si=zkqeb-DBQQ-uSVQoj3fe1A" />
          <Card image="../src/assets/Amine - 13 Months of Sunshine.jpeg" title="13 Months of Sunshine // Aminé" desc="summer. in an album. that's it. (it's also like house music + rap had a baby)" out="https://open.spotify.com/album/5B4zpYhcIOJXQO7YWBh0LE?si=uelT9AuwR8K52n_U8FwWiw" />
          <Card image="../src/assets/Dear Evan Hansen Original Broadway Cast Recording.jpeg" title="Dear Evan Hansen (Original Broadway Cast Recording)" desc="you can take the kid out of the musical, but you can't take the musical out of the kid (easily one of my favorite guilty pleasures)" out="https://open.spotify.com/album/0LhDyJXelg31FKLW5GDcKi?si=z6Dhdu5DR_eWUcaLoIhzZA" />
          <Card image="../src/assets/Q - 10 songs.jpeg" title="10 songs // Q" desc="ten songs (funk, rnb, pop) that show the surprising versatility of an artist that so happens to be spectacularly enjoyable" out="https://open.spotify.com/album/6kBVXxCYWSiuGEboOMYOl8?si=N-IXB0X9R6qfW96DL-q3-Q" />
        </div>
    </>

  )
}

export default App;