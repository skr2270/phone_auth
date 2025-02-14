import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { OtpService } from './otp.service';
import { SendOtpResponse } from './dto/send-otp.response';
import { SendOtpInput } from './dto/send-otp.input';
import { VerifyOtpInput } from './dto/verify-otp.input';
import { VerifyOtpResponse } from './dto/verify-otp.response';

@Resolver()
export class OtpResolver {
    constructor(private readonly otpService: OtpService) { }

    @Mutation(() => SendOtpResponse)
    async sendOtp(@Args('input') input: SendOtpInput): Promise<SendOtpResponse> {
        const success = await this.otpService.sendOtp(input.phoneNumber);
        return { success };
    }

    @Mutation(() => VerifyOtpResponse)
    async verifyOtp(@Args('input') input: VerifyOtpInput): Promise<VerifyOtpResponse> {
        const verified = await this.otpService.verifyOtp(input.phoneNumber, input.otp);
        return { verified };
    }
}
