import React from "react";
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <a className={styles.footerLink} href="https://github.com/Chase22/phasmophobia-ghost-helper">GitHub</a>
                <a className={styles.footerLink} href="https://github.com/Chase22/phasmophobia-ghost-helper/issues">Issue Tracker</a>
        </footer>
    )
}
