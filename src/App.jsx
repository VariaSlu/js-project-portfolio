import "./index.css"
import Card from "./components/Card"




export const App = () => {
  return (
    <>
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</p>

      <Card
        title="Project One"
        text="bla bla" />
      <Card
        title="Project Two"
        text="bla bla" />
      <Card
        title="Project Three"
        text="bla bla" />
    </>
  )
}


