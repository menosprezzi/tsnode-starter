import dotenv from 'dotenv';
import { Injectable } from "injection-js";

@Injectable()
export class AppConfig {
  constructor() {
    dotenv.config();
  }
}
