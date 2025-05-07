import cosplay from '../assets/cosplay-dark-templar-weapon-WIP.jpg';
import pikachu from '../assets/detective-pikachu-plushie-display.jpg';
import castle from '../assets/osaka-castle.jpg';
import pentago from '../assets/python-pentago-game-take-turn.png';
import terrier from '../assets/yorkshire-terrier-couch-tongue-blep.jpg';

function GalleryPage(){
    const images = [terrier, pikachu, castle, pentago, cosplay];
    return (
        <>
            <h2>Gallery</h2>
            <p>
                Here are some images from my personal life as well as some code I have written.
            </p>
            <article class="gallery">
            {
                images.map((image) => 
                <figure>
                    <img src={image} alt="" title="" />
                </figure>
                )
            }
            </article>
        </>
    )
}
export default GalleryPage;