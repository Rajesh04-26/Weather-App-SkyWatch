import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

export default function Footer() {
    return (
        <footer>
        <p>Thanks for visiting my app ~ <b>@Rajesh</b></p>
        <div className="social-icons">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </footer>
    );
}