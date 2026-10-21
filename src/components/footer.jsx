import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"

export default function Footer(){
    return(
        <footer>
        <span> Abhishek's page</span>
          <img src={twitter} width={'20px'}/>
          <img src={instagram} width={'20px'} className="instagram"/>
        </footer>
    )
}