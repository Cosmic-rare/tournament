import "@/styles/home.css"
import type { AppProps } from "next/app"
import Script from "next/script"
import * as gtag from "../lib/gtag"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material"
import Link from "next/link"
import ArchiveIcon from "@mui/icons-material/Archive"
import MapIcon from "@mui/icons-material/Map"
import ScoreboardIcon from "@mui/icons-material/Scoreboard"
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd"
import dynamic from "next/dynamic"

const resize = () => {
  const height = window.innerHeight
  const width = window.innerWidth
  document.documentElement.style.setProperty("--100vh", `${height}px`)
  document.documentElement.style.setProperty("--100vw", `${width}px`)
  return { height: height, width: width }
}

type routeType = {
  href: string
  iconMobail: any
  iconDesktop: any
  title: string
}

const routes: routeType[] = [
  { href: "/", iconMobail: <ScoreboardIcon />, title: "Tournament", iconDesktop: <ScoreboardIcon style={{ width: 30, height: 30, margin: 10 }} /> },
  { href: "/map", iconMobail: <MapIcon />, title: "Map", iconDesktop: <MapIcon style={{ width: 30, height: 30, margin: 10 }} /> },
  { href: "/user", iconMobail: <AssignmentIndIcon />, title: "User", iconDesktop: <AssignmentIndIcon style={{ width: 30, height: 30, margin: 10 }} /> },
  { href: "/", iconMobail: <ArchiveIcon />, title: "Tournament", iconDesktop: <ArchiveIcon style={{ width: 30, height: 30, margin: 10 }} /> },
]

const BottomNav = () => {
  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={null}
        onChange={(_, newValue) => {
          console.log(newValue)
        }}
        showLabels={true}
        style={{ backgroundColor: "#2196f3" }}
        sx={{ height: 56 }}
      >
        {routes.map((v: routeType, i: number) => <BottomNavigationAction key={i} label="" icon={<Link href={v.href}>{v.iconMobail}</Link>} />)}
      </BottomNavigation>
    </Paper>
  )
}

const AnScript = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag("js", new Date())

            gtag("config", "${gtag.GA_MEASUREMENT_ID}")
          `,
        }}
      />
    </>
  )
}

function App({ Component, pageProps }: AppProps) {
  if (!localStorage.getItem("id")) {
    localStorage.setItem("id", crypto.randomUUID())
  }

  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouterChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange)
    }
  }, [router.events])

  const [innerSize, setInnerSize] = useState({ height: 0, width: 0 })
  const handleResize = () => {
    setInnerSize(resize())
  }
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)
  }, [])

  if (innerSize.width <= 700) {
    return (
      <>
        <AnScript />
        <div>
          <div style={{ padding: 10, paddingBottom: 56 }}>
            <Component {...pageProps} />
          </div>
          <BottomNav />
        </div>
      </>
    )
  } else {
    return (
      <>
        <AnScript />
        <div style={{ height: "var(--100vh)", maxWidth: 900, width: "70%", minWidth: 600, display: "flex", margin: "0px auto" }}>
          <div style={{
            height: "100%",
            width: 220,
            overflowX: "hidden",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            flexShrink: 0,
            paddingTop: 15 + 50
          }}>
            {routes.map((v: routeType, i: number) => {
              return (
                <Link href={v.href} key={i}>
                  <div style={{ width: 220, height: 50, display: "flex", alignItems: "center", padding: "auto" }}>
                  {v.iconDesktop}
                    <div style={{ marginLeft: 10 }}>{v.title}</div>
                  </div>
                </Link>
              )
            })}

          </div>
          <div style={{ height: "100%", width: "100%", overflowX: "scroll", padding: 10 }}>
            <Component {...pageProps} />
          </div>
        </div>
      </>
    )
  }
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
})
