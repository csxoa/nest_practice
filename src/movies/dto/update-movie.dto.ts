import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString } from "class-validator";
import { fromEventPattern } from 'rxjs';
import { CreateMovieDto } from "./create-movie.dto";

export class updateMovieDto extends PartialType(CreateMovieDto) {}