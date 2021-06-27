import { Neo4jConfig } from './interface/neo4j-config.interface';
import neo4j from 'neo4j-driver';
export class Neo4jsUtil {
  static async createDriver(config: Neo4jConfig) {
    const driver = neo4j.driver(
      config.url || `${config.scheme}://${config.host}:${config.port}`,
      neo4j.auth.basic(config.username, config.password),
    );
    await driver.verifyConnectivity();
    return driver;
  }
}
