import './FrontPage.css'

function FrontPage() {
    return (
        <div className='main-layout'>
            <div className='intro-container'>
                <span className='hello'>Hello! I am</span>
                <span className='name'>Nate Robison</span>
                <span className='title'>Software Engineer</span>
                <span className='desc'>
                    I'm a passionate junior developer based in Seattle, WA, currently studying software development with a keen focus in both web and software application. I'm committed to designing and building user-friendly, innovative solutions - whether through a browser or installed as standalone applications. I'm always eager to explore new opportunities that will allow me to enhance my skills and create products that pushes boundaries.
                </span>
            </div>

            {/* <div className='about-me-container'>
                <div className='column'>
                    <h1>Past</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio rem odit harum labore! Ducimus.</p>
                </div>
                <div className='column'>
                    <h1>Present</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio rem odit harum labore! Ducimus.</p>
                </div>
                <div className='column'>
                    <h1>Future</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio rem odit harum labore! Ducimus.</p>
                </div>
            </div> */}
        </div>
    );
}

export default FrontPage