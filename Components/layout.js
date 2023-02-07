import MyNavBar from '../Components/mynavbar'

export default function Layout({ children }) {
  return (
    <>
      <MyNavBar />
      <main>{children}</main>
    </>
  )
}