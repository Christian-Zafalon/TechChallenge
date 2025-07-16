import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { CriarPostDto } from '../dto/criar-post.dto';
import { AtualizarPostDto } from '../dto/atualizar-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async criar(criarPostDto: CriarPostDto): Promise<Post> {
    const post = this.postRepository.create(criarPostDto);
    return this.postRepository.save(post);
  }

  async listarTodos(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async buscarPorId(id: string): Promise<Post> {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException('Post não encontrado');
    }
    return post;
  }

  async atualizar(id: string, atualizarPostDto: AtualizarPostDto): Promise<Post> {
    const post = await this.buscarPorId(id);
    this.postRepository.merge(post, atualizarPostDto);
    return this.postRepository.save(post);
  }

  async remover(id: string): Promise<void> {
    const result = await this.postRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Post não encontrado');
    }
  }

  async buscarPorTermo(termo: string): Promise<Post[]> {
    return this.postRepository
      .createQueryBuilder('post')
      .where('post.titulo ILIKE :termo', { termo: `%${termo}%` })
      .orWhere('post.conteudo ILIKE :termo', { termo: `%${termo}%` })
      .getMany();
  }
}
