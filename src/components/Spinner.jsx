import Spinner from "react-bootstrap/Spinner";

function SpinnerBlue() {
    return (
        <Spinner animation="border" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default SpinnerBlue;
