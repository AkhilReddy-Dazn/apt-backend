// src/your-module/your-resolver.ts

import { Resolver, Query ,Args, Context} from '@nestjs/graphql';
import { AppService } from 'src/app.service';
import {MccItem } from 'src/schema/schema';

@Resolver()
export class YourResolver {
    constructor(private readonly appService: AppService) {}
  @Query(() => String)
  hello(): string {
    return this.appService.getHello();
  }

  @Query(() => [MccItem])
  async fetchMcc(@Args('country') country: string, @Context() context: any): Promise<[MccItem]>{
    const data = this.appService.fetchData(country);
    context.req.session.data = await data;
    console.log( context.req.session,'lkljkhjkhj');
    return data;
  }

  @Query(() => [MccItem])
  async getStoredData(@Context() context: any): Promise<[MccItem]> {
    // Retrieve data from the session
    const storedData =await context.req.session.data;
    console.log(context.req.session,'getStoredData');
    if (!storedData) {
        throw new Error('Data not available in the session.');
      }

    return storedData;
  }

  // Add more queries or mutations as needed
}
