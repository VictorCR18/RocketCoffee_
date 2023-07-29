import { Header } from "../../components/Header"
import { Content } from "../../components/Content";
import Blur1 from "../../assets/blur-1.png";
import Blur2 from "../../assets/blur-2.png";
import './styles.scss';

export function Home(){
    return(
        <div className="content-home">
            <img id="blur1" src={Blur1}/>
            <img id="blur2" src={Blur2}/>
            <Header />
            <Content />
        </div>
    )
}