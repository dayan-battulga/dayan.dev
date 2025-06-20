import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <section
      className="mx-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0"
      style={{
        paddingRight: '32px',
        paddingLeft: '32px',
      }}
    >
      {children}
    </section>
  )
}
