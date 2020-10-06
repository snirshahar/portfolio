import React from "react"
import { Link } from "gatsby"
import resume from "../assets/Snir Shahar-CV.pdf"
import Layout from "../components/layout"
// import me from "../assets/me.png"
import Seo from "../components/seo"
const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <article className="about">
        <h1>About</h1>
        <div className="content about__contnet">
          <p>
            I am a Frontend Web Developer with a wide-angle stack including
            the latest web technologies. My expertise ranges from JavaScript(ES6)
            frontend libraries such as <em>Vue, React and Angular</em>, all the way to
            pixel perfect development based on <em>CSS 3&HTML 5</em>. As a self
            learner who is always on top of the latest technologies and
            innovations, I also do backend applications based on NodeJS, which results in beautiful full scale web
            apps.
          </p>
          <p>
            I am a graduate of&nbsp;
            <a
              className="a"
              href="https://www.coding-academy.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Academy
            </a>
            <br></br>
            - an intensive first class coding bootcamp (540 hours) that
            qualifies leading frontend developers.
          </p>
          <p>
            <strong>-Always On Top Of The Latest Technology:</strong>
            I program in modern JavaScript (ES6). My server side knowledge
            includes nodeJS, PHP, SQL and non-SQL database work.
          </p>
          <p>
            <strong>-Responsive Design:</strong>
            Leaning on HTML5, CSS3 and SASS my apps are built from Photoshop, Figma or Sketch to a live page,
            which creates a responsive website in the “mobile first” method.
          </p>
          <p>
            <strong>-Building a Full Scale Web App:</strong>
            My scripts have increased performance and conversion rates.
            💻 I always use state management, Git and Webpack whether it's for MVC
            frameworks, single page apps or progressive web apps (PWA).
            Go have a look in my <Link to="/projects/"> projects </Link> section.
          </p>
          <p>
            Currently Looking For My Next Challenge <br />
            <span role="img" aria-label="heart">
              📝
            </span>
            <a href={resume} className="a" download="Snir Shahar">
              my resume
            </a>
          </p>
        </div>
      </article>
        {/* <div className="about__img">
          <div className="toltip speech-bubble">Coding Is Life</div>
          <img src={me} alt="naaman frenkel" />
        </div> */}
    </Layout>
  )
}
export default AboutPage
