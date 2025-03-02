import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class VerifyOtpResponse {
    @Field()
    verified: boolean;
}