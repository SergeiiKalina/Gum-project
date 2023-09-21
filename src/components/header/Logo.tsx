import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./logo.module.scss"
import { FaDumbbell } from "react-icons/fa"

export default function Logo(): React.JSX.Element {
    return (
        <div style={{ display: "flex" }}>
            <NavLink to="gentraining" className={styles.link}>
                <FaDumbbell className={styles.dumbbell} />
                <h1 className={styles.logo}>Your Training Every Day</h1>
            </NavLink>
        </div>
    )
}
