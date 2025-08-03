"use client";
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    fetch("http://localhost:9000/api/hello")
      .then(res => res.text())
      .then(res => setApiResponse(res))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="./logo.svg" className={styles.logo} alt="logo" />
        <h1 className={styles.title}>Welcome to Next.js</h1>
      </header>
      <p className={styles.description}>{apiResponse}</p>
    </div>
  );
}


// export default function Home() {
//   return (
//     <div>
//       HOME PAGE
//     </div>
//   );
// }
