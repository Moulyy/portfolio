import Card from "./Card";
import DelayedList from "./DelayedList";

export default function Skills() {
  const skills = [
    { name: "Vue.js", icon: "Vue" },
    { name: "React", icon: "React" },
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "TailwindCSS", icon: "TailwindCSS" },
    { name: "JavaScript", icon: "JavaScript" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "Node.js", icon: "Node" },
    { name: "Express", icon: "Express" },
    { name: "MongoDB", icon: "MongoDB" },
    { name: "Firebase", icon: "Firebase" },
    { name: "Git", icon: "Git" },
  ]

  const skillsList = skills.map((skill, index) => (
    <Card key={index} classes="flex items-center hover:text-primary cursor-pointer">{skill.name}</Card> 
  ))

  return (
    <section id="skills" className="scroll-mt-24">
      <h1 className="font-bold text-primary text-center text-2xl mb-2">Skills</h1>
      <div className="flex flex-wrap gap-3">
        <DelayedList items={skillsList} delay={200} />
      </div>
      
    </section>
  )
}