import { MDXRemote } from 'next-mdx-remote/rsc';
import clsx from 'clsx';
import styles from './CustomMDX.module.css';

export default function CustomMDX(props, className) {
  return (
    <div className={clsx(styles.page, className)}>
      <MDXRemote {...props} />
    </div >
  )
}
