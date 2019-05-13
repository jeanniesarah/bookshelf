/** @jsx jsx */
import {jsx} from '@emotion/core'

import styled from '@emotion/styled'
import {Router, Link, Redirect} from '@reach/router'
import * as mq from './styles/media-queries'
import * as colors from './styles/colors'
import {useAuth} from './context/auth-context'
// 🐨 import all the screens here

function AuthenticatedApp() {
  const {user, logout} = useAuth()
  return (
    <div
      css={{
        margin: '0 auto',
        padding: '2em 0',
        maxWidth: '840px',
        width: '100%',
        display: 'grid',
        gridGap: '1em',
        gridTemplateColumns: '3fr 9fr',
        [mq.small]: {
          gridTemplateColumns: '1fr',
          grodTemplateRows: 'auto',
          width: '100%',
          padding: '2em 1em',
        },
      }}
    >
      <div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          {user.username}
          <button
            onClick={logout}
            css={{
              marginLeft: '10px',
            }}
          >
            Logout
          </button>
        </div>
        <Nav />
      </div>
      <main css={{width: '100%'}}>
        <Routes />
      </main>
      <footer />
    </div>
  )
}

// Here's our styled version of @reach/router's <Link /> component
const NavLink = styled(Link)({
  display: 'block',
  padding: '8px 15px 8px 10px',
  margin: '5px 0',
  width: '100%',
  height: '100%',
  color: colors.text,
  borderRadius: '2px',
  borderLeft: '5px solid transparent',
  ':hover': {
    color: colors.indigo,
    textDecoration: 'none',
    background: colors.gray10,
  },
})

function Nav(params) {
  return (
    <nav
      css={{
        position: 'sticky',
        top: '2em',
        padding: '3em 1.5em',
        border: `1px solid ${colors.gray10}`,
        borderRadius: '3px',
        [mq.small]: {
          padding: '0.5em 1em',
          position: 'static',
        },
      }}
    >
      <ul
        css={{
          listStyle: 'none',
          padding: '0',
          '& [aria-current="page"]': {
            borderLeft: `5px solid ${colors.indigo}`,
            background: colors.gray10,
            ':hover': {
              background: colors.gray10,
            },
          },
        }}
      >
        {/*
          🐨 render a NavLink (each inside its own <li>) for the following routes:
          "/list" "Reading List"
          "/finished" "Finished Books"
          "/discover" "Discover"

          💰 a "NavLink" is our styled version of @reach/router's Link component
          you can check it out above
        */}
      </ul>
    </nav>
  )
}

// 🦉 We don't have a home route ("/"). Instead, we take people directly to
// their reading list ("/list")
// 🐨 create a simple component called RedirectHome.
// 🐨 return @reach/router's Redirect component to redirect to "/list"
// 💰 <Redirect to="/list" />
// ⚠️ there's currently a bit of a problem with this redirect. It works in the
// final app but not quite right in this exercise. I'm not sure why and I'll try
// to find the solution, but just know that if you get an error in the console
// that's expected (for now).

function Routes() {
  // 🐨 render the <Router> here with the following routes:
  // "/" RedirectHome
  // "/list" ReadingListScreen
  // "/finished" FinishedBooksScreen
  // "/discover" DiscoverBooksScreen
  // "/book/:bookId" BookScreen
  // default NotFound
  //
  // 💰 with @reach/router, instead of using a special <Route /> component you
  // render the <Router> and each of its children is what you want rendered
  // with a path prop. For example: <Router><Home path="/"></Router>
  return <div>authenticated-app.js Routes TODO</div>
}

export default AuthenticatedApp
// const Finished = require('./authenticated-app.finished')
// export default Finished.default

/* eslint no-unused-vars:0 */