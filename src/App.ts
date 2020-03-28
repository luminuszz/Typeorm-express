/* eslint-disable import-helpers/order-imports */
import { createConnection } from 'typeorm'
import * as path from 'path'
import { corsConfig } from './config/cors'

import 'reflect-metadata'
import './config/database'
import routes from './routes'
import * as express from 'express'
import * as cors from 'cors'

/* eslint-disable no-path-concat */

class App {
  public express: express.Application;
  public constructor () {
    this.express = express()
    this.middlwares()
    this.database()
    this.routes()
  }

  private middlwares (): void {
    this.express.use(express.json())
    this.express.use(cors(corsConfig))
  }

  private database (): void {
    createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 4000,
      username: 'postgres',
      password: '123',
      database: 'postgres',
      entities: [path.join(__dirname, './', 'entity', '*')],
      migrations: [path.join(__dirname, './', 'migrations', '*')],
      synchronize: true
    })
      .then(() => console.log('connected'))
      .catch(error => {
        console.log(error)
      })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
