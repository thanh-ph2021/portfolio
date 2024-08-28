import '../css/AboutStyles.css'
import '../App.css'

export const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="img-side" />
                    <div className="text-side">
                        <h3>About me</h3>
                        <h4>React Native Developer <br /> based in Ho Chi Minh city, Vietnam 🎈</h4>
                        <p>Hey, my name is Thanh, and I'm a React Native Developer. My passion is to create and develop a mobile app for my users.
                        <br /><br />
                        My main stack currently is React Native in combination with Redux and TypeScript.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}