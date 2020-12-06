import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('HotDog')
export class HotdogEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 32 })
  name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 500 })
  link: string;
}
