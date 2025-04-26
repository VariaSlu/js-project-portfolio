import "./index.css"
import { Header } from "./sections/Header"
import { Contacts } from "./sections/Contacts"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Tech } from "./sections/Tech"


export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <Projects />
      <Skills />
      <Contacts />

    </>
  )
}
