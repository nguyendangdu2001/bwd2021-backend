import { DynamicModule, Module, Provider } from '@nestjs/common';
import { Neo4jConfig } from './interface/neo4j-config.interface';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './neo4j.constant';
import { Neo4jService } from './neo4j.service';
import { Neo4jsUtil } from './neo4j.ultil';

@Module({})
export class Neo4jModule {
  static forRoot(config: Neo4jConfig): DynamicModule {
    return {
      module: Neo4jModule,
      global: true,
      providers: [
        Neo4jService,
        { provide: NEO4J_CONFIG, useValue: config },
        {
          provide: NEO4J_DRIVER,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => {
            return Neo4jsUtil.createDriver(config);
          },
        },
      ],
      exports: [Neo4jService],
    };
  }
  static forRootAsync(configProvider): DynamicModule {
    return {
      module: Neo4jModule,
      providers: [
        Neo4jService,
        { provide: NEO4J_CONFIG, ...configProvider } as Provider<Neo4jConfig>,
        {
          provide: NEO4J_DRIVER,
          inject: [NEO4J_CONFIG],
          useFactory: async (config: Neo4jConfig) => {
            return await Neo4jsUtil.createDriver(config);
          },
        },
      ],
      exports: [Neo4jService],
    };
  }
}
