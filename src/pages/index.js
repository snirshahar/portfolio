import React from "react"
import Layout from "../components/layout"
import HomePageNav from "../components/HomePageNav"
import Seo from "../components/seo"
import Typer from "../components/Typer"
const dataText = [
  "Front-End Web Developer",
  "Full-Stack Web Developer",
  "React Professional",
  "Vue Expert",
  "CSS Ninja",
  // "WordPress Expert",
].sort(function () { return 0.5 - Math.random() })
class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo title="Home" />
        <article className="home">
          <h1 className="home__title">
            Hi, <br />
            I'm Snir, A
            <br className="mobile" />
            <br />
            <span className="home__title--bold home-title-aniamtion">
              <Typer dataText={dataText} />
            </span>
          </h1>
          <HomePageNav />
        </article>
      </Layout>
    )
  }
}

export default IndexPage
