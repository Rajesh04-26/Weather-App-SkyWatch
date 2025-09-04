import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
        <p>Thanks for visiting my app ~ <b>@Rajesh</b></p>
        <div className="social-icons">
          <a href="https://github.com/Rajesh04-26" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="www.linkedin.com/in/rajesh-kumar-singh-1549112b9" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </footer>
    );
}