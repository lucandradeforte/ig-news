import { SignInButton } from "../SignInButton"
import styles from "./styles.module.scss"

interface HeaderProps { }

export function Header({ }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <picture>
          <img src="/images/logo.svg" alt="ig.news" />
        </picture>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}