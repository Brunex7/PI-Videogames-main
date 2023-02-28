import style from './Landing.module.css'

const Landing = () =>{
    return( 
    <>
        <div className={style.container}> 
            <h1>HENRY | PI VIDEO GAMES</h1>
            <img src="https://i.pinimg.com/originals/14/41/b1/1441b1dccd8e996429e01d7108d4968b.jpg" alt="landingImg" />
            <h2>Here you can find all video games on all platforms, 
                so you can enjoy an incredible experience.</h2>
            <p>Enjoy the best experience browsing our page.</p>
            <a href='/home'>Start Now</a>    
        </div>
    </>
    )
}

export default Landing;