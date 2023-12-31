// src/your-module/your-data.dto.ts

import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
// export class YourType {
//   @Field()
//   // Add fields based on the structure of your data
//   hellos: null;
// }

  @ObjectType()
  class Asset {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    name: string;
  
    @Field(() => String)
    type: string;
  
    @Field(() => String)
    urn: string;
  
    @Field(() => String)
    lastUpdateTime: string;
  
    @Field(() => String)
    language: string;
  
    @Field(() => String)
    availableFrom: string;
  
    @Field(() => String)
    availableUntil: string;
  }
  
  @ObjectType()
  class Venue {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    value: string;
  }
  
  @ObjectType()
  class TournamentCalendar {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    value: string;
  }
  
  @ObjectType()
  class Competition {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    code: string;
  
    @Field(() => String)
    value: string;
  }
  
  @ObjectType()
  class Ruleset {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    value: string;
  }
  
  @ObjectType()
  class Sport {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    value: string;
  }
  
  @ObjectType()
  class Fixture {
    @Field(() => String)
    id: string;
  
    @Field(() => String)
    date: string;
  
    @Field(() => String)
    time: string;
  
    @Field(() => Venue)
    venue: Venue;
  
    @Field(() => TournamentCalendar)
    tournamentCalendar: TournamentCalendar;
  
    @Field(() => Competition)
    competition: Competition;
  
    @Field(() => Ruleset)
    ruleset: Ruleset;
  
    @Field(() => Sport)
    sport: Sport;
  }

  @ObjectType()
  class filteredData{
    @Field(() => String, { nullable: true })
    id : string

    @Field(() => String, { nullable: true })
    name : string
  }
  
  @ObjectType()
  export  class MccItem {
    @Field(() => String)
    name: string;
  
    @Field(() => String)
    id: string;
  
    @Field(() => [Asset])
    asset: Asset[];
  
    @Field(() => Fixture)
    fixture: Fixture;
  
    @Field(() => filteredData)
    fixtureData?: filteredData;
  
    @Field(() => filteredData, { nullable: true })
    sportData?: filteredData;
  
    @Field(() => filteredData, { nullable: true })
    competitionData?: filteredData;
  }
  
//   @ObjectType()
// export class AutogeneratedMainType {
//     @Field(() => [MccItem])
//     mccItem: any[];
// }
