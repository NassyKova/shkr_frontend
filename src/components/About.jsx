import Title from "./styled/Title";
const About = () => {
    return (
        <div>
            <Title>About Us</Title>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    color: "#00a18e ",
                    margin: "5rem 20rem",
                }}
            >
                {" "}
                The purpose of this website is to create an easy-to-use cocktail
                recipe book for liquor distributors to provide to bartenders as
                a means of promoting their product. Arming bartenders with easy
                access to a multitude of recipes will allow them to keep the
                distributor's products front of mind and more importantly front
                of house and in the customer's hands. The website includes a
                library of drink recipes, searchable by ingredient, name, or
                various other genres according to taste. Upon searching for an
                ingredient, a random drink using that ingredient will be
                provided with recipe, picture and method. The app will also
                provide admin users the ability to remove certain drinks from
                the randomizing function so that specific drinks can be excluded
                from the search results, as well as manipulating the database to
                maintain brands across different recipes.
            </div>
        </div>
    );
};

export default About;
