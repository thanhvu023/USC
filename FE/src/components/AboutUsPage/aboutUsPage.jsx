import React from 'react';
import lady2 from '../../assets/lady2.jpg'
import './AboutUs.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faTumblr } from '@fortawesome/free-brands-svg-icons';

export default function AboutUsPage() {
  return (
    <div className="about-us">
      <h2>Our Professional Team</h2>
      <div className="team-members">
        <div className="member">
          <img src={lady2} alt="Danny Awesome" />
          <h3>Danny 1</h3>
          <p>GUEST LECTURER: DESIGN</p>
          <p>Ut enim ad minima veniam, quis nostrum
             exercitationem ullam corporis suscipit laboriosam.</p>
             <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
    </div>
        </div>
        <div className="member">
          <img src={lady2} alt="Danny Awesome" />
          <h3>Danny 2</h3>
          <p>GUEST LECTURER: DESIGN</p>
          <p>Ut enim ad minima veniam, quis nostrum
             exercitationem ullam corporis suscipit laboriosam.</p>
             <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      {/* Repeat for other social networks */}
    </div>        </div>
        <div className="member">
          <img src={lady2} alt="Danny Awesome" />
          <h3>Danny 3</h3>
          <p>GUEST LECTURER: DESIGN</p>
          <p>Ut enim ad minima veniam, quis nostrum
             exercitationem ullam corporis suscipit laboriosam.</p>
             <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      {/* Repeat for other social networks */}
    </div>        </div>
        <div className="member">
          <img src={lady2} alt="Danny Awesome" />
          <h3>Danny 3</h3>
          <p>GUEST LECTURER: DESIGN</p>
          <p>Ut enim ad minima veniam, quis nostrum
             exercitationem ullam corporis suscipit laboriosam.</p>
             <div className="social-icons">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTumblr} />
      </a>
      {/* Repeat for other social networks */}
    </div>        </div>
      </div>
    </div>
  );
}
