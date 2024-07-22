import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
  } from "react-icons/fa";
  
  import ContentWrapper from "../contentWrapper/ContentWrapper";
  
  import "./style.scss";
  
  const Footer = () => {
    return (
      <footer className="footer">
        <ContentWrapper>
          <ul className="menuItems">
            <li className="menuItem">Terms Of Use</li>
            <li className="menuItem">Privacy-Policy</li>
            <li className="menuItem">About</li>
            <li className="menuItem">Blog</li>
            <li className="menuItem">FAQ</li>
          </ul>
          <div className="infoText">
            Harnessing the power of Vite and Redux, this movie app brings you an
            immersive cinematic experience right at your fingertips. Explore a
            vast collection of films, discover new releases, and delve into your
            favorite genres, all with seamless navigation and intuitive controls.
            Sit back, relax, and let the magic of movies unfold before your eyes.
            Lights, camera, action!
          </div>
          <div className="socialIcons">
            <span className="icon">
              <a href="https://github.com/LAmollo" target="blank">
                <FaGithub />
              </a>
            </span>
            <span className="icon">
              <a href="https://www.tiktok.com/@fiscoinlawi/" target="blank">
                <FaTikTok />
              </a>
            </span>
            <span className="icon">
              <a href="https://x.com/TheLawi2" target="blank">
                <FaTwitter />
              </a>
            </span>
            <span className="icon">
              <a href="https://www.linkedin.com/in/benson-amollo-8b0265139/" target="blank">
                <FaLinkedin />
              </a>
            </span>
          </div>
        </ContentWrapper>
      </footer>
    );
  };
  
  export default Footer;
  