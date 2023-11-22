
import './App.css';
import myphoto from './myphoto.jpg';
import certificateslogo from './certificateslogo.jpeg';
import emaillogo from './emaillogo.jpeg';
import hobbies from './hobbieslogo.jpeg';
import education from './educationlogo.jpeg';
import home from './homelogo.jpeg';
import language from './languageslogo.jpeg';
import linkedin from './linkedinlogo.jpeg';
import mobile from './mobilelogo.jpg';
import objective from './objectivelogo.jpeg';
import profile from './profilelogo.jpeg';
import skills from './skillslogo.jpeg'
function App() {   
  const mystyle={
    height:"1010px",
    left:"20px",
   float:"left",
   width:"30%",
   backgroundColor: "#66d3fa"
  
  }
  const rightcomp ={
    height:"1000px",
    fontsize: "16px",
    right:"50px",
    float:"left",
    width:"30%",
    backgroundColor: "#d5f3fe",
    border: "5px solid  #87CEEB" 
  }
  return (
    <div className="App">
     
     <html>
   <head>
       <title>My Resume</title>      
   </head>
   <body>
   <div   style={mystyle}> <br/><br/>
   <ul> <img src={myphoto} alt=''  height={300} width={300} style={{borderRadius:700}}  />
    

   <h2><img src={objective} alt='' height={30} width={30}></img>OBJECTIVE</h2>
   <p>Eagerly looking forward to work as a Full Stack Developer
    at your esteemed organization which offers challenging assignments
    and carrer growth prospects</p> 
  
  
   <h2><img src={education} alt='' height={30} width={30}></img>EDUCATION</h2>
   <li>PSG COLLEGE OF ARTS AND Science,
    COIMBATORE.
    BACHELOR OF SCIENCE -70%
   </li>
   <li>
    HOLY ANGELS MATRIC HR.SEC.SCHOOL,
    COIMBATORE -HSC60%
   </li>
   <li>ST.JOSEPH MATRIC.HR.SEC SCHOOL
    MANAMADURAI.
   </li>
   <h2><img src={certificateslogo}alt='' height={30} width={30}></img>CERTIFICATES</h2>
   
    <li> FULL STACK DEVELOPEMENT PRO | FROM IMARTICUS LEARNING,
      COIMBATOR
    </li>
    <li>AUTOCAD DESIGNING | FROM 
      ARRIS CADD ACADEMY,COIMBATOR
    </li>
    </ul>
   </div>

     <div   style={rightcomp} >
     <br/> <br/>
     <ul>
     <h1 style={{fontFamily:"-moz-initial"}}>DIVANRAJAN R</h1>
     <h1>FULL STACK DEVELOPER</h1>
     
   
<h2><img src={profile} alt='' height={30} width={30}></img>PROFILE</h2><ul>
<img src={mobile}alt='' height={30} width={30}></img>7904792486 <br/>
<img src={home}alt='' height={30} width={30}></img>ADDRESS:LAKSHMI NAGAR,NALLAMPALAYAM
      COIMBATORE<br/>
      <img src={emaillogo}alt='' height={30} width={30}></img>EMAIL:divanrajan2001@gmail.com<br/>
      <img src={linkedin}alt='' height={30} width={30}></img>LINKEDIN:
    </ul>
<h2><img src={skills}alt='' height={30} width={30}></img>SKILLS</h2>
<h3>LANGUAGES</h3>
    <li>HTML</li>
    <li>CSS</li>
    <li>JAVASCRIPT</li>
    <li>JAVA</li>
<h3>FRAMEWORK</h3>
<li>REACT</li>
<h3>DATABASE</h3>
    <li>MONGODB</li>
<h3>TOOLS</h3>
    <li>GIT</li>
    <li>VISUAL STUDIO CODE</li>
    <li>ECLIPSE</li>
<h3> <img src={language}alt='' height={30} width={30}></img>SPEAKING LANGUAGES</h3>
    <li>TAMIL</li>
    <li>ENSLISH</li>
<h3><img src={hobbies}alt='' height={30} width={30}></img>HOBBIES & INTERESTS</h3>

    <li>BODY BUILDING</li>
    <li>DANCING</li>
    <li>TRAVEL & EXPLORE</li>

    </ul>
   </div>
  
   </body>
</html>
    </div>
  );
}

export default App;