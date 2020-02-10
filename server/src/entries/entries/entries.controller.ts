import { Controller, Get } from '@nestjs/common';
import { Entry } from '../../types/entry.entity';
import { EntriesService } from './entries.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
@Controller('api/entries')
export class EntriesController {
    constructor(private entriesService: EntriesService){}
  @Get()
  index(): Promise<Entry[]> {
    return this.entriesService.findAll();
  }    
  
  @Post('create')
  async create(@Body() entryData: Entry): Promise<any> {
    return this.entriesService.create(entryData);
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
