import style from './TextBlock.module.css'

export type TextBlockProps = {
  children: React.ReactNode
}

export default function TextBlock({ children }: TextBlockProps): JSX.Element {
  return <div className={style.textblock}>{children}</div>
}
