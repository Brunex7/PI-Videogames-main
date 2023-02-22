import style from './Landing.module.css'

const Landing = () =>{
    return( 
    <>
        <div className={style.container}> 
            <img src="https://i.pinimg.com/564x/eb/77/86/eb77865a4919996ef3529b65fd04465f.jpg" alt="landingImg" />
            <h1>HENRY | PI VIDEO GAMES</h1>
            <h2>Here you can find all video games on all platforms, 
                so you can enjoy an incredible experience.</h2>
            <p>Enjoy the best experience browsing our page.</p>
            <a href='/home'>Start Now</a>    
        </div>
    </>
    )
}

export default Landing;