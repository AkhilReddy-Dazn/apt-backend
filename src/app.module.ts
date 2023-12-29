import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { YourResolver } from './resolvers/feed.resolver';
import { sessionMiddleware } from './config/session.config';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true, // Specify the file path
      path: '/graphql',
      sortSchema: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()]
    }),
  ],
  controllers: [AppController],
  providers: [AppService, YourResolver],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(sessionMiddleware)
      .forRoutes('*');
  }
}