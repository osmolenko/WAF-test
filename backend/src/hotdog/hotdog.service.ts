import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {HotdogEntity} from './hotdog.entity';
import {Repository} from 'typeorm';
import {createHotDogDto} from './dto/createHotDog.dto';
import {updateHotDogDto} from './dto/updateHotDog.dto';

@Injectable()
export class HotdogService {
    constructor(
        @InjectRepository(HotdogEntity)
        private hotdogRepository: Repository<HotdogEntity>,
    ) {
    }

    async getAll() {
        return await this.hotdogRepository.find();
    }

    async create(data: createHotDogDto) {
        const newHotDog = await this.hotdogRepository.create(data);
        await this.hotdogRepository.save(newHotDog);
        return newHotDog.id;
    }

    async update(data: updateHotDogDto) {
        const updatedHotDog = await this.hotdogRepository.update(data.id, data);
        return updatedHotDog;
    }

    async delete(id: string) {
        await this.hotdogRepository.delete(id);
    }
}
