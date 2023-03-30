import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocationsService } from './locations.service';

@ApiTags('위치정보')
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiOperation({ summary: '모든 위치정보 조회' })
  @Get()
  async getAllLocations() {
    return await this.locationsService.getAllLocations();
  }

  @ApiOperation({ summary: '특정 위치정보 조회' })
  @Get('/:location_id')
  async getLocationById(
    @Param('location_id', ParseIntPipe) location_id: number,
  ) {
    return await this.locationsService.getLocationById(location_id);
  }
}
