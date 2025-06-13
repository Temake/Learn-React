import React from 'react'
import ReactDOM from 'react-dom'

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
]
const ranges = Array.from({ length: 32 }, (_, i) => i);

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
    <div className='number-generator'>
      

        <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
        
      </div>
   
  )
}

export default App