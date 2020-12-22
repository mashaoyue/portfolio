import React from "react";
import "./styles/resume.css"
// import ishareIcon from "./img/icons/ishare.png"
import resume from "./data/resume.json"

const Resume = ()=>{
    // const ishareIcon = require("/img/icons/ishare.png");
    const data = resume;
    const [step, setStep] = React.useState<number>(0);
    const prevScrollY = React.useRef(0);
    const [goingUp, setGoingUp] = React.useState(false);

    

    const handleClickSkills = ()=>{
        setStep(0);
        let elmnt = document.getElementById("skills");
        if(elmnt){
            elmnt.scrollIntoView({behavior:"smooth"});
        }
    }

    const handleClickProjects = ()=>{
        setStep(1);
        let elmnt = document.getElementById("projects");
        if(elmnt){
            elmnt.scrollIntoView({behavior:"smooth", });
        }
    }

    const handleClickEducation = ()=>{
        setStep(2);
        let elmnt = document.getElementById("education");
        if(elmnt){
            elmnt.scrollIntoView({behavior:"smooth"});
        }
    }

    React.useEffect(() => {
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            let elmnt_skills = document.getElementById("skills");
            let elmnt_projects = document.getElementById("projects");
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }
            if(prevScrollY.current > currentScrollY && elmnt_skills && elmnt_projects){
                if(currentScrollY < elmnt_skills.offsetTop){
                    setStep(0);
                } else if(currentScrollY < elmnt_projects.offsetTop) {
                    setStep(1);
                } else {
                    setStep(2);
                }
            }
            prevScrollY.current = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [goingUp]);

    const handleClickGoTop = ()=>{
        window.scrollTo({behavior:"smooth", top:0});
    }

    return(
        <div className="resume_container" id="skills">
            <div className="panel">
                <h2 onClick={handleClickSkills} className={step===0?"tab_selected":"tab_unselected"}>SKILLS</h2>
                <h2 onClick={handleClickProjects} className={step===1?"tab_selected":"tab_unselected"}>PROJECTS</h2>
                <h2 onClick={handleClickEducation} className={step===2?"tab_selected":"tab_unselected"}>EDUCATION</h2>
            </div>



            <div className="projects_container" >
                <h2 className="titles">SKILLS</h2>
                <div className="skill-content">
                    <ul  className="list_container">
                        {data.skills.map((item, k)=>(
                            <li key={k} className="list_item">
                                <div className="skill-item">
                                    <div className="skill-header">
                                        <strong>{item.title}</strong>&nbsp;–&nbsp;
                                    </div>
                                    <div className="skill-content">
                                        {item.content}
                                    </div>
                                </div>
                            </li>
                        ))}
                        
                    </ul>
                    
                </div>
            </div>


            <div className="projects_container" id="projects">
                <h2 style={{display:"block"}} className="titles">EXPERIENCE</h2>

                {data.projects.map((item, index)=>{
                    return(
                        <div key={index} className="project_container">
                            {item.project_h1===""?null:<div className="project_h1 para-title">
                                {item.project_h1}
                            </div>}
                            <div className="project_h2">
                                <div className="project_header para-title">
                                    <img src={item.icon} alt={item.icon_alt}/>
                                    <div className="project_conpany">{item.project_h2}</div>
                                </div>
                                <div className="project_duration">{item.duration}</div>
                            </div>
                            <div className="paras_container">
                                {item.sub_projects.map((project, project_index)=>{
                                    return(
                                        <div key={project_index}>
                                            {project.title===""?null:<div style={{fontStyle: "italic"}} className="para-title">{project.title}</div>}
                                            <ul className="list_container">
                                                {project.details.map((detail, detail_index)=>{
                                                    return(
                                                        <li key={detail_index} className="list_item para-content">{detail.length>7 && detail.slice(0,7)==="http://"?<div><a href={detail.slice(0, detail.indexOf(" "))} rel="noreferrer" target="_blank">{detail.slice(0, detail.indexOf(" "))}</a><span>{detail.slice(detail.indexOf(" "))}</span></div>:detail}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className="projects_container" id="education">
                <h2 style={{display:"block"}} className="titles">EDUCATION</h2>
                <div className="project_container">
                    <div className="project_h1 para-title">
                        Master of Information Technology
                    </div>
                    <div className="project_h2">
                        <div className="project_header para-title">
                            <img src="/images/icons/unsw.png" alt="iShareIcon"/>
                            <div className="project_conpany">UNSW Sydney</div>
                        </div>
                        <div className="project_duration">Feb 2018 - Jan 2020</div>
                    </div>
                    {/* <ul className="list_container">
                        <li className="list_item para-content">
                            Distinction averaged
                        </li>
                    </ul> */}
                </div>

                <div className="project_container">
                    <div className="project_h1 para-title">
                        Bachelor & Master of Electronic Engineering
                    </div>
                    <div className="project_h2">
                        <div className="project_header para-title">
                            <img src="/images/icons/xidian.jpg" alt="iShareIcon"/>
                            <div className="project_conpany">Xidian University</div>
                        </div>
                        <div className="project_duration">Sep 2010 - Jul 2017</div>
                    </div>
                    {/* <ul className="list_container">
                        <li className="list_item para-content">
                            85.21/100 weighted
                        </li>
                    </ul> */}
                </div>

            </div>
            <div className="footer">
                You've reached the end.
                <button className="back-to-top" onClick={handleClickGoTop}>Back to top?</button>
            </div>
        </div>
    )
}

export default Resume;