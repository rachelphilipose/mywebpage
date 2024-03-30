
import Fullpage, {FullPageSections, FullpageSection, /*FullpageNavigation*/} from '@ap.cx/react-fullpage';
import "../../index.css"
import profilePic from "/Users/rachelphilipose/my-Dev/mywebpage/rachel_webpage/src/assets/IMG_1888.jpg"



const FullPage = () => {

    const SectionStyle = {
        //height: '100vh',
        width:'80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'auto'
       }
    const ContainerStyle = {
        //height: '100vh',
        width:'100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
       }

    const ColStyle = {
        flex: '50%'
    }
    const PicStyle = {
        width:'80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%'
    }

    return (
        <Fullpage>
            {/*<FullpageNavigation style = {NavStyle}/>*/}
            <FullPageSections>
                <FullpageSection style={SectionStyle}>
                    <div className='container'>
                    <div className='row' style={ContainerStyle}>
                        <div className='col' style={ColStyle}>
                            <img src={profilePic} style = {PicStyle} ></img>
                        </div>
                    
                        <div className='col' style={ColStyle}>
                            <h1>Hi I&apos;m Rachel!</h1>
                            <div className='container'>
                                <p> Thanks for visiting my web page :) </p>
                            </div>

                            <div className='container'>
                                <p>I&apos;m a second year Computer Science student at the University of Waterloo. When I&apos;m not completing assignments or coding, you can probably find me rock-climbing, thrifting, or reading. </p>
                            </div>

                            <div className='container'>
                                <p> Since you&apos;re already here, scroll down to learn more about me, and click the links above to connect with me via LinkedIn, Email, or Phone Number. Don&apos;t be a stranger, say hi, I&apos;m very friendly! </p>
                            </div>

                        </div>
                    </div>
                </div>
                </FullpageSection>

                <FullpageSection style={SectionStyle}> 

                    <div className="container-text-center">
                        <div className="row">
                            <h1>Professional Experience</h1>
                            <p> I&apos;ve completed one internship and two co-op placements so far, 
                                encompassing a variety of roles ranging from 
                                Full Stack Software Engineer to Site Reliability Engineer and AI/ML Developer. 
                                In all of my roles, I&apos;ve had the opportunity to make a real impact on 
                                the companies I&apos;ve worked with by successfully planning and executing 
                                projects independently.  </p>
                            <p> Some things I&apos;ve worked on in the past are 
                                designing a UI for a form-based onboarding wizard, implementing a Computer Vision 
                                AI model to perform crowd analysis, and creating a GitHub Bot from scratch to minimize drift between production branches. </p>
                                
                        </div>
                    </div>
                    
                </FullpageSection>


            </FullPageSections>

        </Fullpage>
    );
};

export default FullPage;