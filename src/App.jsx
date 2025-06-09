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
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
          <Card image="bazin" title="ga1" desc="bazing" out="https://www.youtube.com/watch?v=1mXwnL2T_es" />
        </div>
    </>

  )
}

export default App;