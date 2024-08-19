import {
  IsDate,
  IsDateString,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @MaxLength(1000)
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  readonly password: string;

  @IsDateString()
  @IsNotEmpty()
  readonly birthday: Date;

  @IsString()
  @MaxLength(255)
  @IsEmpty()
  readonly horoscope: string;

  @IsString()
  @MaxLength(255)
  @IsEmpty()
  readonly zodiac: string;

  @IsNumber()
  readonly height: number;

  @IsNumber()
  readonly weight: number;
}
