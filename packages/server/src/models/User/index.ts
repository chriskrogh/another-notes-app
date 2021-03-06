import type { ObjectId } from 'mongodb';

import { ObjectType, Field } from 'type-graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';

@ObjectType()
export class User {
  @Field(() => String)
  readonly _id!: ObjectId;

  @Field()
  @prop({ required: true })
  firstName!: string;

  @Field()
  @prop({ required: true })
  lastName!: string;

  @Field()
  @prop({ required: true })
  email!: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
