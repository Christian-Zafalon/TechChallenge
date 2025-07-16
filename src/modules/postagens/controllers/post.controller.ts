import { Controller, Get, Post, Body, Param, Put, Delete, Query, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PostService } from '../services/post.service';
import { CriarPostDto } from '../dto/criar-post.dto';
import { AtualizarPostDto } from '../dto/atualizar-post.dto';
import { Post as PostEntity } from '../entities/post.entity';

@ApiTags('postagens')
@Controller('postagens')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Criar um novo post' })
  @ApiResponse({ status: 201, description: 'Post criado com sucesso', type: PostEntity })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  async criar(@Body() criarPostDto: CriarPostDto): Promise<PostEntity> {
    return this.postService.criar(criarPostDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as postagens' })
  @ApiResponse({ status: 200, description: 'Lista de postagens retornada com sucesso', type: [PostEntity] })
  async listarTodos(): Promise<PostEntity[]> {
    return this.postService.listarTodos();
  }

  @Get('search')
  @ApiOperation({ summary: 'Buscar postagens por termo' })
  @ApiQuery({ name: 'termo', required: true, description: 'Termo para busca no título ou conteúdo' })
  @ApiResponse({ status: 200, description: 'Postagens encontradas', type: [PostEntity] })
  async buscarPorTermo(@Query('termo') termo: string): Promise<PostEntity[]> {
    return this.postService.buscarPorTermo(termo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um post por ID' })
  @ApiParam({ name: 'id', description: 'ID do post' })
  @ApiResponse({ status: 200, description: 'Post encontrado', type: PostEntity })
  @ApiResponse({ status: 404, description: 'Post não encontrado' })
  async buscarPorId(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.buscarPorId(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um post existente' })
  @ApiParam({ name: 'id', description: 'ID do post a ser atualizado' })
  @ApiResponse({ status: 200, description: 'Post atualizado com sucesso', type: PostEntity })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 404, description: 'Post não encontrado' })
  async atualizar(
    @Param('id') id: string,
    @Body() atualizarPostDto: AtualizarPostDto,
  ): Promise<PostEntity> {
    return this.postService.atualizar(id, atualizarPostDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um post' })
  @ApiParam({ name: 'id', description: 'ID do post a ser removido' })
  @ApiResponse({ status: 204, description: 'Post removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Post não encontrado' })
  async remover(@Param('id') id: string): Promise<void> {
    return this.postService.remover(id);
  }
}
