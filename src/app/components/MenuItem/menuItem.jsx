'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import styles from "./menuItem.module.css";
import { useState } from 'react'

export default function MenuItem({ text, route, iconClass }) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(router.asPath === route)

	console.log('Rota atual:', router.asPath);
	console.log('Rota do item de menu:', route);
  return (
    <Link className={styles.menuItem} href={route}>
      <i className={`${iconClass} ${isActive ? styles.active : ""}`}></i>
      <span className={isActive ? styles.active : ""}>{text}</span>
    </Link>
  );
}