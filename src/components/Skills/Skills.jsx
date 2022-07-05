import { CSS } from '../svg/CSS'
import { DataStructure } from '../svg/DataStr'
import { HTML } from '../svg/HTML'
import { JavaScript } from '../svg/JavaScript'
import { React } from '../svg/React'
import {NodeJs} from '../svg/NodeJs'
import {Express} from '../svg/Express'
import './skills.css'
import { MongoDB } from '../svg/MongoDB'
import { Redux } from '../svg/Redux'
import { Postman } from '../svg/Postman'
import { NPM } from '../svg/NPM'
import { Git } from '../svg/Git'

export const Skills = ()=>{
    return(
        <div id='Skill' className='skill'>
         <div id='skill'>
         <div>
              <div id='head'>Skills</div>
              <div className='lang language'>
                <div id='html'>
                    <div><HTML/></div>
                    <div>HTML</div>
                </div>
                <div id='css'>
                    <div><CSS/></div>
                    <div>CSS</div>
                </div>
                <div id='javascript'>
                    <div><JavaScript/></div>
                    <div>JavaScript</div>
                </div>
                <div id='reacts'>
                    <div id='react' ><React/></div>
                    <div>React</div>
                </div>
                <div id='node'>
                    <div><NodeJs/></div>
                    <div>NodeJs</div>
                </div>
                <div id='express'>
                    <div><Express/></div>
                    <div>Express</div>
                </div>
                <div id='mongo'>
                    <div><MongoDB/></div>
                    <div>MongoDB</div>
                </div>
                <div id='redux'>
                    <div><Redux/></div>
                    <div>Redux</div>
                </div>
                <div id='post'>
                    <div><Postman/></div>
                    <div>Postman</div>
                </div>
                <div id='npm'>
                    <div><NPM/> </div>
                    <div>NPM</div>
                </div>
                <div id='git'>
                    <div><Git/></div>
                    <div>Git</div>
                </div>
                <div id='dsa'>
                    <div><DataStructure/></div>
                    <div>Data Structure</div>
                </div>
              </div>
          </div>
         </div>
        </div>
    )
}