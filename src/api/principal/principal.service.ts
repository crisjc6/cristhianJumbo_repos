  import { InternalServerErrorException } from '@nestjs/common';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
  
  export abstract class PrincipalService<Entity> {
    protected readonly repository: Repository<Entity>;
    private Entidad?;
    constructor(
        repository: Repository<Entity>,
        Entidad?: any,
    ) {
      this.repository = repository;
      this.Entidad = Entidad;
    }
  
    async findOne(
        criterioBusqueda?: FindOneOptions<Entity>,
    ): Promise<Entity> | undefined {
      try {
        const respuesta = await this.repository.findOne(criterioBusqueda);
        return respuesta;
      } catch (e) {
        console.error({
          mensaje: 'Error findOne',
          error: e,
        });
        throw new InternalServerErrorException({
          error: 500,
          mensaje: 'Error del servidor',
        });
      }
    }
  
    async find(
        criterioBusqueda?: FindManyOptions<Entity>,
        arregloIds?: number[],
    ): Promise<Entity[] | [Entity[], number]> {
      try {
        const respuesta = await this.repository.findAndCount(criterioBusqueda);
        return respuesta;
      } catch (e) {
        console.error({
          mensaje: 'Error find',
          error: e,
        });
        throw new InternalServerErrorException({
          error: 500,
          mensaje: 'Error del servidor',
        });
      }
    }
  
    async create(registro: Entity): Promise<any> {
      try {
        const respuesta = await this.repository.save(registro);
        return respuesta;
      } catch (e) {
        console.error({
          mensaje: 'Error create',
          error: e,
        });
        throw new InternalServerErrorException({
          error: 500,
          mensaje: 'Error del servidor',
        });
      }
    }

    async findOneByIdAndUpdate(
        id: number | string,
        criterioBusqueda: FindOneOptions<Entity>,
        datosAActualizar: Entity,
        esSocket?: boolean,
    ): Promise<any> {
      try {
        await this.repository.update(id, datosAActualizar);
        const respuesta = await  this.repository.findOne(criterioBusqueda);
        return respuesta;
      } catch (e) {
        console.error({
          mensaje: 'Error create findOneByIdAndUpdate',
          error: e,
        });
        throw new InternalServerErrorException({
          error: 500,
          mensaje: 'Error del servidor',
        });
      }
    }
  
    async delete(
        criterio?:
            | string
            | number
    ): Promise<any> {
      try {
        const respuesta = await this.repository.delete(criterio);
        return respuesta;
      } catch (e) {
        console.error({
          mensaje: 'Error create delete',
          error: e,
        });
        throw new InternalServerErrorException({
          error: 500,
          mensaje: 'Error del servidor',
        });
      }
    }
  }