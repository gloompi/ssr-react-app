import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Routes from '../client/Routes'

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
      </head>
      <body>
        <div id="mount-point">${content}</div>
        <script src="main.js"></script>
      </body>
    </html>
  `
}