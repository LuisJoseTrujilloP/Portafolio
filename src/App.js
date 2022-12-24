import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./globalStyles"
import { darkTheme } from "./components/Themes"

function App() {
  return <>


  <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode='wait'>
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location} >
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/about" element={<AboutPage />} />

            <Route path="/blog" element={<BlogPage />} />

            <Route path="/work" element={<WorkPage />} />

            <Route path="/skills" element={<MySkillsPage />} />
            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>

  </>  
}

export default App

