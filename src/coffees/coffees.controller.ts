import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entitiy';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeeSvc: CoffeesService) {
  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeeSvc.findAll(paginationQuery);
  }

  @Get(':id')
  getCoffee(@Param('id') id: number) {
    return this.coffeeSvc.findOne(id);
  }

  @Post()
  addCoffee(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeeSvc.create(createCoffeeDto);
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: number, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeSvc.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: number) {
    return this.coffeeSvc.remove(id);
  }
}
