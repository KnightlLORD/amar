import { useEffect,useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"; 
import headerimg from "../assets/img/header-img.svg";
const Banner = ()=>{
    const [loopNum,setLoopNum] = useState(0);
    const [isDeleted,setIsDeleted] = useState(false);
    const toRotate = [" Web Developer", " Web Designer", " UI/UX Designer"];
    const [text,setText] = useState('');
    const [delta,setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta);
        return ()=> {clearInterval(ticker)};
    },[text]);

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleted ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
            if(isDeleted){
                setDelta(prevDelta => prevDelta/2)
            }
            if(!isDeleted && updatedText === fullText){
                setIsDeleted(true);
                setDelta(period);
            }
            else if(isDeleted && updatedText===""){
                setIsDeleted(false);
                setLoopNum(loopNum+1);
                setDelta(500);
            }
    }
    return(
        <section>
            <Container>
                <Row className="banner" id="home">
                    <Col sm={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my portfolio
                        </span> 
                        <h1>{`Hi I'm Amar`}<span className="wrap">{text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <button onClick={()=>console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col sm={12} md={6} xl={5}>
                        <img src={headerimg} alt="header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;