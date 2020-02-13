import { Controller, Get } from '@nestjs/common';
import { Entry } from '../../types/entry.entity';
import { EntriesService } from './entries.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { EntryPostResponseBody } from 'src/types/EntryPostResponseBody';
@Controller('api/entries')
export class EntriesController {
    constructor(private entriesService: EntriesService){}
  @Get()
  index(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }    
  
  @Post('create')
  async create(@Body() entryData: Entry): Promise<EntryPostResponseBody> {
    return new Promise<EntryPostResponseBody>((res,rej) => {
      this.entriesService.create(entryData).then((value) => {
        res({ Success: 1 } as EntryPostResponseBody);
      }).catch((reason) => {
        res({Success: -1, ErrorText: reason } as EntryPostResponseBody);
      })
    });
  }  
  
  @Put(':id/update')
  async update(@Param('id') id, @Body() entryData: Entry): Promise<any> {
      entryData.ID = Number(id);
      console.log('Update #' + entryData.ID)
      return this.entriesService.update(entryData);
  } 
   @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.entriesService.delete(id);
  } 
}
