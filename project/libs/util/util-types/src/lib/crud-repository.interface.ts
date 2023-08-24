export interface CRUDRepository<E, I, R> {
  create(item: E): Promise<R>;

  update(id: I, item: E): Promise<R>;

  delete(id: I | R): Promise<void>;

  findOne?(id: I): Promise<R | null>;

  findMany?(): Promise<R[] | null>;
}
