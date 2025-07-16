import { IsString, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarPostDto {
  @ApiProperty({ description: 'Título do post', example: 'Meu primeiro post' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 255)
  titulo: string;

  @ApiProperty({ description: 'Conteúdo do post', example: 'Este é o conteúdo do meu primeiro post.' })
  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @ApiProperty({ description: 'Nome do autor do post', example: 'João Silva' })
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  autor: string;
}
