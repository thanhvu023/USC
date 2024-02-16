import React from 'react';
import './home.scss';
import lady2 from '../../assets/lady2.jpg'
import { faTwitter, faLinkedinIn, faTumblr } from '@fortawesome/free-brands-svg-icons';

import laydy from '../../assets/lady.jpg'; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className='main-container'>
   
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
        <section className="education-section">
          <div className="content">
            <div className="text-block">
              <h2>Created For Education Business</h2>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <div className="features">
              <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faAward} size='3x' />
              </div>
              <div className="feature-content">
              <h3>Internationally Recognised</h3>
              <p>Certificates that are recognized globally.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBookOpen} size='3x' />
              </div>
              <div className="feature-content">
              <h3>Innovative Syllabus</h3>
              <p>Curriculum designed to meet industry standards.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUserGraduate} size='3x' />
              </div>
              <div className="feature-content">
              <h3>Guaranteed Career</h3>
              <p>Graduate with a job-ready skillset.</p>
              </div>
            </div>
              </div>
            </div>
            <div className="image-block">
              <img src={laydy} alt="Person pointing" />
            </div>
          </div>
        </section>
        </div>
      );
}

export default Home;
