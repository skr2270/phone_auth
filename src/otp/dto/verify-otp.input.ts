import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class VerifyOtpInput {
    @Field()
    phoneNumber: string;

    @Field()
    otp: string;
}