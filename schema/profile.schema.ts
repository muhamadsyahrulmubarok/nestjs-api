import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Profile {
  @Prop()
  name: string;
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  birthday: Date;
  @Prop()
  horoscope: string;
  @Prop()
  zodiac: string;
  @Prop()
  height: number;
  @Prop()
  weight: number;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);
