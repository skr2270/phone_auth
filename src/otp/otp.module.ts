import { Module } from '@nestjs/common';
import { OtpResolver } from './otp.resolver';
import { OtpService } from './otp.service';
import { FakeSmsProvider } from './sms/fake.sms.provider';

@Module({
  providers: [
    OtpResolver,
    OtpService,
    {
      provide: 'SmsProvider',
      useClass: FakeSmsProvider,
    },
  ],
})
export class OtpModule {}
