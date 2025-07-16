import { PartialType } from '@nestjs/swagger';
import { CriarPostDto } from './criar-post.dto';

export class AtualizarPostDto extends PartialType(CriarPostDto) {}
