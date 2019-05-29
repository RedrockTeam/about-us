import React, { useContext } from "react"
import { Context } from "../../Context"
import "./index.scss"

export const Department = () => {
  const { title, department } = useContext(Context)
  const { copywriting, departments, masters } = department
  departments.splice(0, 1)

  return (
    <div className="department">
      <div className="title">
        <div className="line" />
        {title.department}
      </div>
      <div className="copywriting">{copywriting}</div>
      <div className="se-title" style={{ marginTop: "5vw" }}>
        站长团
      </div>
      <div className="masters">
        {masters.map((master, i) => {
          const { name, job, intro, avatar } = master

          return (
            <div className="master" key={i}>
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="information">
                <div className="master-info">
                  <div className="name">{name}</div>
                  <div className="job">职位：{job}</div>
                </div>
                <div className="intro">{intro}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="se-title" style={{ marginTop: "8vw" }}>
        部门介绍
      </div>
      {
        departments.map((department, i) => {
          const { name, introduction, photo } = department

          return (
            <div className="department-card" key={i}>
        <div className="picture">
          <img src={photo} alt=""></img>
        </div>
        <div className="copywriting">
          <div className="name">{name}</div>
          <div className="intro">{introduction}</div>
        </div>
      </div>
          )
        })
      }
    </div>
  )
}
