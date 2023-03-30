import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Locations } from 'src/entities/locations.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Locations)
    private readonly locationsRepository: Repository<Locations>,
  ) {}

  async getAllLocations() {
    const locations = await this.locationsRepository.find({
      relations: ['country'],
    });

    return locations;
  }

  async getLocationById(location_id: number) {
    const location = await this.locationsRepository.findOne({
      where: { location_id },
      relations: ['country'],
    });

    if (!location) {
      throw new BadRequestException('위치정보가 존재하지 않습니다.');
    }

    return location;
  }
}
