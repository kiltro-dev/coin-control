import { ReactElement } from 'react'

interface PageProps {
  external?: boolean
  children: string | ReactElement
  className?: string
}

export default function Page({ className, children }: PageProps) {
  return (
    <div
      className={`
        flex flex-col min-h-screen bg-gradient-to-r
        from-zinc-900 via-black to-zinc-900
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  )
}
