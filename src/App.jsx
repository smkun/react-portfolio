// src/app.jsx

// Defines a functional component named PortfolioPage.
const PortfolioPage = () => {
    // Array containing objects that describe different skills.
    const mySkills = [
        {
            name: "JavaScript",
            comfort: 9,
            frontEnd: true,
            backend: true,
        },
        {
            name: "CSS",
            comfort: 8,
            frontEnd: true,
            backend: false,
        },
        {
            name: "HTML",
            comfort: 10,
            frontEnd: true,
            backend: false,
        },
    ];

    // Inline styles for various elements of the portfolio page.
    const style = {
        container: {
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            margin: "20px auto",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
        },
        skillCard: {
            backgroundColor: "#f9f9f9",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
        },
        title: {
            textAlign: "center",
            color: "#333",
        },
        detail: {
            fontSize: "16px",
            color: "#666",
        },
        comfortLevel: {
            fontWeight: "bold",
            color: "darkgreen",
        },
    };

    // Map over the mySkills array to create JSX elements for each skill.
    // Each element is styled according to the defined styles.
    const skillCards = mySkills.map((skill, index) => (
        <div
            key={index}
            style={style.skillCard}>
            <p style={style.detail}>
                Skill: <span style={style.comfortLevel}>{skill.name}</span>
                <br />
                Comfort Level:{" "}
                <span style={style.comfortLevel}>{skill.comfort}/10</span>
                <br />
                Areas:{" "}
                {skill.frontEnd && skill.backend
                    ? "Frontend & Backend"
                    : skill.frontEnd
                    ? "Frontend"
                    : "Backend"}
            </p>
        </div>
    ));

    // Return the JSX that renders the overall container with the title and skill cards.
    return (
        <div style={style.container}>
            <h1 style={style.title}>My Skills</h1>
            {skillCards}
        </div>
    );
};

// Export the PortfolioPage component so it can be used in other parts of the application.
export default PortfolioPage;
