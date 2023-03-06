import { Connection, Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto/pagination-query.dto';
import { CreateCoffeeDto } from './dto/create-coffe.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/create-coffe.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';
export declare class CoffeesService {
  private readonly coffeeRepository;
  private readonly flavorRepository;
  private readonly connection;
  constructor(
    coffeeRepository: Repository<Coffee>,
    flavorRepository: Repository<Flavor>,
    connection: Connection,
  );
  findAll(paginationQuery: PaginationQueryDto): Promise<Coffee[]>;
  findOne(id: string): Promise<Coffee[]>;
  create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
  update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee>;
  remove(id: string): Promise<Coffee[]>;
  recommendCoffee(coffee: Coffee): Promise<void>;
  private preloadFlavorByName;
}
