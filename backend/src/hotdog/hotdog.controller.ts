import {Body, Controller, Delete, Get, Post} from '@nestjs/common';
import {HotdogService} from './hotdog.service';
import {createHotDogDto} from './dto/createHotDog.dto';
import {updateHotDogDto} from './dto/updateHotDog.dto';

@Controller('hotdog')
export class HotdogController {
    constructor(private readonly hotdogService: HotdogService) {
    }

    @Get('get')
    async getAllHotDog() {
        return await this.hotdogService.getAll();
    }

    @Post('create')
    async createHotDog(@Body() data: createHotDogDto) {
        return await this.hotdogService.create(data);
    }

    @Post('update')
    async updateHotDog(@Body() data: updateHotDogDto) {
        return await this.hotdogService.update(data);
    }

    @Delete('delete')
    async deleteHotDog(@Body() id: string) {
        return await this.hotdogService.delete(id);
    }
}
