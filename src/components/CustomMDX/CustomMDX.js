import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeSnippet from '@/components/CodeSnippet/CodeSnippet';
import clsx from 'clsx';
import styles from './CustomMDX.module.css';

export default function CustomMDX(props, className) {
  const components = {
    pre: (props) => (
      <CodeSnippet {...props} />
    )
  }

  return (
    <div className={clsx(styles.page, className)}>
      <MDXRemote {...props} components={components} />
    </div >
  )
}
