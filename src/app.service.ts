import { Injectable } from '@nestjs/common';
// const fetch = require('node-fetch');
import got from 'got'
@Injectable()
export class AppService {

  // private apiUrl: string;

  // constructor(apiUrl: string) {
  //     this.apiUrl = apiUrl;
  // }

  getHello(): string {
    return 'Hello World!';
  }

  async fetchData(country): Promise<any> {
    try {
        const response = await got(`https://api.daznfeeds.com/mcc/${country}/?_rt=b&_fmt=json&_fld=fx.fDt,fx.fTm,fx.sprt,fx.rust,fx.comp,fx.tmcl,fx.stg,fx.srs,fx.ctst,fx.vn,fx.idnt,mi.name,as.tp,as.name,as.lut,as.lang,as.avf,as.avu&_ord=fx.fDt&_ordSrt=desc&fx.fDt=[2023-12-01T13:49:51Z%20TO%202023-12-20T13:49:51Z]&_pgSz=50&_pgNm=1&as.lang=*`);
        
      if (!response.statusCode || response.statusCode < 200 || response.statusCode >= 300) {
          throw new Error(`HTTP request failed with status code ${response.statusCode}`);
      }

      const data = JSON.parse(response.body);
      let filteredData = data.mccItem.map(item=>({
        ...item,
        fixtureData :{
          id : item.id,
          name : item.name
        },
        sportData:{
          id: item.fixture.sport.id,
          name: item.fixture.sport.value,
        },
        competitionData :{
          id: item.fixture.competition.id,
          name: item.fixture.competition.value,
        }
      }))
      // console.log(filteredData.slice(0,2));
      return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // You might want to handle or rethrow the error based on your application's needs.
    }
  }

// Example usage
// const dataService = new DataService('https://api.example.com/data');
// dataService.fetchData()
//     .then((data) => {
//         console.log('Fetched data:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

}
