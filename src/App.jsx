import "./index.css"
import { Header } from "./sections/Header"
import { Contacts } from "./sections/Contacts"
import { FeaturedProjects } from "./sections/FeaturedProjects"
import { Skills } from "./sections/Skills"
import { Tech } from "./sections/Tech"


export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <Contacts />

    </>
  )
}
