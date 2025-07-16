import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { seedPosts } from './seeds/seed-posts';

async function runSeed() {
  try {
    await AppDataSource.initialize();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    
    await seedPosts(AppDataSource);
    
    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro ao executar o seed:', error);
  } finally {
    await AppDataSource.destroy();
    process.exit(0);
  }
}

runSeed();
