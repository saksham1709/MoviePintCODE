import { Link } from "react-router-dom";
const Home = () => {
    const handleclick = () =>{
        console.log('hello')
        
    }
    return ( 
        <div className="display">
            <video src="./videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Lights-Camera & Action</h1>
            <p>Quick , grab your snacks it's only a 10 minute interval</p>
            <div className="display-btns">
                <Link to="/contact"><button className="btn--outline">Get Started</button></Link>
                <button className="btn--primary" onClick={() => {window.open('https://www.youtube.com/watch?v=p-gG2qo_l_A', '_blank')}}>Watch Trailer <i class="far fa-play-circle"></i></button>
            </div>
        </div>
     );
}
 
export default Home;







