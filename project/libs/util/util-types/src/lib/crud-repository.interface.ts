import { Pagination } from '@project/shared/app-types';

export interface CRUDRepository<E, I, R> {
  create(item: E): Promise<R>;

  update?(id: I, item: E): Promise<R>;

  delete(id: I | E): Promise<void>;

  findOne?(id: I): Promise<R | null>;

  findMany?({ skip, limit, offset }: Pagination): Promise<R[] | null>;
}
