import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Divider from '../divider/Divider'

function Experience() {
  return (
    <section id='experience'>
      <Divider/>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript / Typescript</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Ext JS</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        {/*EXPERIENCE FRONTEND*/}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>PL/SQL</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>XML</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Oracle DB / SQL Developer</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Hibernate</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Spring Boot</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        {/*GAME DEVELOPMENT*/}
        <div className='experience__backend'>
          <h3>Game Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unity Game Engine</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Blender 3D</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Game UI/UX (Photoshop)</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Game Design</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        {/*MOBILE DEVELOPMENT*/}
        <div className='experience__backend'>
          <h3>Mobile Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React Native</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Mobile UI/UX</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        {/*QUALITY ASSURANCE*/}
        <div className='experience__backend'>
          <h3>Quality Assurance</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Manual Testing Mobile Apps</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Manual Testing Web Apps</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>API Testing (Postman)</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Test Case Execution</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Error Documentation and Troubleshooting</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience