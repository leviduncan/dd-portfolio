import ButtonLink from './ButtonLink'

function Hero() {
    return (
        <header id="Home" className="hero">
            <div className="container">
                <div className="content">
                    <div className="">
                        <h3>Hi, my name is <strong>Darrin Duncan</strong>,</h3>
                        <h1>I build engaging front-end experiences with code.</h1>
                        <div className="d-flex flex-column flex-md-row">
                            <div className="btn-grp">
                                <ButtonLink href=" " text="Resume" blank="_blank"/>
                                <ButtonLink href="#connect" text="Let's Connect" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero