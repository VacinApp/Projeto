'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from "./menuItem.module.css";

export default function MenuItem({ text, route, iconClass }) {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <Link className={`${styles.menuItem} ${isActive ? styles.active : ""}`} href={route}>
      <i className={`${iconClass} ${isActive ? styles.activeIcon : ""}`}></i>
      <span>{text}</span>
    </Link>
  );
}