import logo from './logo.svg';
import id_photo from './pictures/id_photo.jpg';
import bear_image from './pictures/bear.jpg'; 
import donor_icon from './pictures/DONOR_image';
import resume_icon from './pictures/RESUME_image.png';
import linkedin_icon from './pictures/Linkedin.png';
import github_icon from './pictures/GitHub.png';
import facebook_icon from './pictures/Facebook.png';
import instagram_icon from './pictures/Instagram.png';
import signature_image from './pictures/signature.png';
import './App.css';

function App() {
  return (
    <div id="App">
      <div name="Title" id="Title">
        <h1 id="App-header">
          California
        </h1>
        <header id='App-subheader'>
          USA
        </header>
        <header id='App-license-header'>
          ENGINEER LICENSE
        </header>
        
        <img id='App-bear' src={bear_image}></img>
        
      </div>
      <div name="Title-line" id="App-header-line1"> 
      </div>
      <div name="Title-line" id="App-header-line2"> </div>
      <div style={{marginTop:50, marginLeft:7, float:'left', paddingRight:3}}>
        <img id='App-idPhoto' src={id_photo}></img>
      </div>
      
      <div id='App-first-name-title'>
        <strong>
          FIRST NAME
        </strong>
        <strong id='App-first-name'>
          Yuteng
        </strong>
      </div>
      

      <div id='App-info-title'>
        <strong>
          LAST NAME
        </strong>
        <strong id='App-info-general'>
          Wu
        </strong>
      </div>

      <div id='App-info-title'>
        <strong>
          DOB
        </strong>
        <strong id='App-info-general'>
          03/12/1999
        </strong>
      </div>
      
      <div id='App-info-title'>
        <strong>
          EMAIL
        </strong>
        <strong id='App-info-general'>
          wu@yuteng.dev
        </strong>
      </div>

      <div id='App-info-title'>
        <strong>
          EDUCATION
        </strong>
        <strong id='App-info-general'>
          University of California, Riverside
        </strong>
      </div>
      
      <div id='App-info-title'>
        <strong>
        MAJOR
        </strong>
        <strong id='App-info-general'>
        Computer Science
        </strong>
      </div>
      
      <div style={{marginTop:10, float:'left', paddingRight:3}}>
        <img id='App-icon-general' src={donor_icon}></img>
      </div>

      <div style={{marginTop:10, float:'left', paddingRight:1}}>
        <a href="https://docs.google.com/document/d/1gBnBmZW1S-4W3xdEv2cREEgqv2u_8mg3stN1-G142kI/edit?usp=sharing">
          <img id='App-icon-resume' src={resume_icon}></img>
        </a>
      </div>

      <div style={{marginTop:10, float:'left', paddingRight:3}}>
        <a href="https://www.linkedin.com/in/yutengwu/">
          <img id='App-icon-general' src={linkedin_icon}></img>
        </a>
      </div>

      <div style={{marginTop:10, float:'left', paddingRight:3}}>
        <a href="https://github.com/YTTWu">
        <img id='App-icon-general' src={github_icon}></img>
        </a>
      </div>

      <div style={{marginTop:10, float:'left', paddingRight:3}}>
        <a href="https://www.facebook.com/yuteng.wu.39/">
          <img id='App-icon-general' src={facebook_icon}></img>
        </a>
      </div>

      <div style={{marginTop:10, float:'left', paddingRight:3}}>
        <a href='https://www.instagram.com/terrenceyutengwu/'>
          <img id='App-icon-general' src={instagram_icon}></img>
        </a>
      </div>

      {/* <div id='App-info-title'>
        <strong>
          LAST NAME
        </strong>
        <strong id='App-info-general'>
          Wu
        </strong>
      </div> */}
      
      
        <div id='App-extra-info-title'>
            <strong>
              PRONOUNS
            </strong>
            <div style={{float:'left'}}>
              <img id='App-signature' src={signature_image}></img>
            </div>
            <strong id='App-extra-info-general'>
              He/Him
            </strong>
        </div>

        <div id='App-info-title'>
          <strong>
          LANGUAGE
          </strong>
          <strong id='App-info-general'>
          English/Chinese
          </strong>
        </div>


        {/* <div id='App-info' style={{marginLeft:110,float:'left', paddingRight:5}}>
          <div >
            <strong>
              LANGUAGE
            </strong>
          </div>
          <div id='App-extra-info' style={{fontSize:12, marginLeft:74, marginTop:-14}}>
            <strong>
              English/Chinese
            </strong>
          </div>
        </div> */}
      

      <div>
        <div name="Title-line" id="App-bottom-line"> </div>
      </div>

      
      
      
      
      
    </div>
    //use js to check the width of the browser and set the relative width for the line
  );
}

export default App;
