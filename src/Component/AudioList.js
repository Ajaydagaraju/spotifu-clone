import React , {useState, useEffect} from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import { MusicPlyer } from './MusicPlyer';
import Songs from './Songs'
function AudioList() {
    const [songs, setSongs] = useState(Songs);
    const [song , setSong] = useState(Songs[0].song);
    const [img , setImage] = useState(Songs[0].imgSrc);
    const [auto, setAuto] = useState(false);

    useEffect(() => {
        const allsongs = document.querySelectorAll(".songs");    
        function changeMenuActive() {
          allsongs.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
        allsongs.forEach((n) => n.addEventListener("click", changeMenuActive));
      }, []);

    const changeFavourite = (id) => {
        Songs.forEach(song => {
            if(song.id === id){
                song.favourite = !song.favourite;
            }
        });
        setSongs([...Songs]);
    }
    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);
        setAuto(true);
    }

  return (
    <div className='AudioList' >
        <h2 className="title">
            The list <span>{`${Songs.length} Songs`}</span>
        </h2>


        <div className="songsContainer">

            {
                Songs && Songs.map((song , index) => (

            <div className="songs" key={song?.id} onClick = { () => setMainSong(song?.song, song?.imgSrc)} >
                <div className="count">{`#${index + 1}`}</div>
                <div className="song">
                    <div className="imgBox">
                        <img src={song?.imgSrc} alt="" />
                    </div>
                    <div className="section">
                            <p className="songName">
                                {song?.songName}
                                <span className='spanArtist' >{song?.artist} </span>
                            </p>

                            <div className="hits">
                                <p className="hit">
                                    <i> <FaHeadphones/> </i>94,343,546
                                </p>
                                <p className="duration">
                                    <i><FaRegClock/></i> 3:04
                                </p>
                                <div className="favourite" onClick={() => changeFavourite(song?.id)} >
                                    {song?.favourite ? 
                                    <i><FaHeart/></i>
                                    :
                                    <i><FaRegHeart/></i>
                                }
                                </div>
                            </div>
                        <div className="hits"></div>
                    </div>
                </div>
            </div>
                     
                     ))
                    }       
        </div>
        <MusicPlyer song={song} imgSrc={img} autoPlay={auto} />
    </div>
  )
}

export {AudioList}