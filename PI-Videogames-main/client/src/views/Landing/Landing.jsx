import style from './Landing.module.css'

const Landing = () =>{
    return( 
    <>
        <div className={style.container}> 
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