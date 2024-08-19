import { Document } from 'mongoose';
export interface IProfile extends Document {
  readonly name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly birthday: Date;
  readonly horoscope: string;
  readonly zodiac: string;
  readonly height: number;
  readonly weight: number;
}
