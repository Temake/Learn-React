import React from 'react'
import ReactDOM from 'react-dom'
import NumberGenerator from './number'

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => {
  return(
  <li>
    {tech} {level}
  </li>)
}

// Skills Component
const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log(skillsList)
  return <ul>{skillsList}</ul>
}

const App = () => {
  return (
 <>
 <NumberGenerator/>
 </>
   
  )
}

export default App