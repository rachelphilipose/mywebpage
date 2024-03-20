
import Fullpage, {FullPageSections, FullpageSection, /*FullpageNavigation*/} from '@ap.cx/react-fullpage';
import "../../index.css"
import profilePic from "/Users/rachelphilipose/my-Dev/mywebpage/rachel_webpage/src/assets/IMG-1891.jpg"
import * as bootstrap from 'bootstrap';


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
                                <p>I&apos;m a student at the University of Waterloo studying Computer Science. When I&apos;m not coding, you can probably find me rock-climbing, thrifting, or reading. </p>
                            </div>

                            <div className='container'>
                                <p> Since you&apos;re already here, scroll down to learn more about me, and click the links above to connect with me via LinkedIn, Email, or GitHub. Don&apos;t be a lurker, say hi, I&apos;m very friendly! </p>
                            </div>

                        </div>
                    </div>
                </div>
                </FullpageSection>

                <FullpageSection style={SectionStyle}> 
                    <div className="container-text-center">
                        <div className="row">
                            <h1>Screen 2</h1>
                        </div>
                    </div>
                    
                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='row'>
                        
                        <h1>Screen 3 </h1>
                    </div>

                </FullpageSection>

                <FullpageSection style={SectionStyle}>
                    <div className='row'>
                        <h1>Screen 4</h1>

                    </div>
                </FullpageSection>

            </FullPageSections>

        </Fullpage>
    );
};

export default FullPage;