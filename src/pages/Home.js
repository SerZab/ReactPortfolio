import Header from "../components/header/Header";

const Home = () => {
    return (
    <>   
    <Header />

    <main className="section">
        <div className="container">

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">FrontEnd</h2>
                        <p>JavaScript, ReactJS, HTML, CSS</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>Java, Python, Spring, Maven, NodeJS, MySQL, MongoDB</p>
                    </li>
                </ul>

        </div>
    </main>
    </> 
    );
}
 
export default Home;