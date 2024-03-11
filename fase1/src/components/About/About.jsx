import styles from './About.module.css';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1 className={styles.aboutTitle}>Sobre</h1>
            <p className={styles.aboutDescription}>
                Esta é uma aplicação para um CRUD de carros
            </p>
        </div>
    );
}

export default About;
