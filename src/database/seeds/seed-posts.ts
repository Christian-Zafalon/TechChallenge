import { DataSource } from 'typeorm';
import { Post } from '../../modules/postagens/entities/post.entity';

export async function seedPosts(dataSource: DataSource) {
  const postRepository = dataSource.getRepository(Post);

  const posts = [
    {
      titulo: 'Bem-vindo ao Blog',
      conteudo: 'Este é o primeiro post do nosso blog. Fique à vontade para explorar!',
      autor: 'Admin',
    },
    {
      titulo: 'Dicas de TypeScript',
      conteudo: 'TypeScript oferece tipagem estática que ajuda a evitar erros comuns em JavaScript.',
      autor: 'Dev Frontend',
    },
    {
      titulo: 'NestJS Framework',
      conteudo: 'NestJS é um framework Node.js progressivo para construir aplicações do lado do servidor eficientes e escaláveis.',
      autor: 'Dev Backend',
    },
    {
      titulo: 'TypeORM em Ação',
      conteudo: 'TypeORM é um ORM que pode ser executado em Node.js e pode ser usado com TypeScript e JavaScript.',
      autor: 'Full Stack',
    },
    {
      titulo: 'Boas Práticas de Código',
      conteudo: 'Manter um código limpo e bem organizado é essencial para a manutenção do projeto.',
      autor: 'Arquiteto de Software',
    },
  ];

  try {
    await postRepository.save(posts);
    console.log('Seed de posts concluído com sucesso!');
  } catch (error) {
    console.error('Erro ao executar o seed de posts:', error);
  }
}
