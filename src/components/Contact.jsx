
const Contact = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            margin: "50px 50px",
            fontSize: "2rem"
        }}>
            <a className="hover-item" href="https://Facebook.com" target="_blank" rel="noreferrer">
                Facebook
            </a>
            <br />
            <a className="hover-item" href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
            </a>
            <br />
            <a className="hover-item" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
            </a>
            <br />
        </div>
    );
};

export default Contact;
