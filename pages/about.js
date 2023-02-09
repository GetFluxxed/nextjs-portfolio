import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div>
            <h1>
                About Me
            </h1>
            <p className={styles.coolColor}>
                I am now a super cool software engineer, I make neat stuff with the codes
            </p>
        </div>
    )
}