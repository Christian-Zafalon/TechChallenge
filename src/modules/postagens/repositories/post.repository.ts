import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async buscarPorTermo(termo: string): Promise<Post[]> {
    return this.createQueryBuilder('post')
      .where('post.titulo ILIKE :termo', { termo: `%${termo}%` })
      .orWhere('post.conteudo ILIKE :termo', { termo: `%${termo}%` })
      .getMany();
  }
}
