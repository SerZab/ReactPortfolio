const Contacts = () => {
    return ( <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Dresden, Germany</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp / Viber</h2>
                    <p><a href="tel:+491788727417">+49 (178) 872-74-17</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:szabolotnyi@icloud.com">szabolotnyi@icloud.com</a></p>
                </li>
            </ul>

    </div>
</main> );
}
 
export default Contacts;