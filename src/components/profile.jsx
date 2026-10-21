import profilePicture from "../assets/self-picture.jpeg"
import email from "../assets/envelope.svg"
import linkedin from "../assets/linkedinn.png"
export default function Profile(){
    return(
        <>
            <img src={profilePicture} alt="profile picture or Abhishek Sahu" className="profile-picture"/>
            <div className="info">
                <p className="name">Abhishek Sahu</p>
                <p className="role">Backend Developer</p>
                <a className="connect" href="https://github.com/101010watson">-- my github link --</a>
            </div>
            <div className="buttons">
                <button className="email">
                <img src={email} />
                Email
                </button>
                <button className="linkedin">
                    <img src={linkedin} width={'20px'}/>
                    Linkedin
                </button>
            </div>
        </>
    )
}