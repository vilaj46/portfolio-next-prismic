interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header>
        <nav>Navigation</nav>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
