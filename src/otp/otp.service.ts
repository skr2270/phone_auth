import { Injectable, Inject } from '@nestjs/common';
import { SmsProvider } from './sms/sms.provider.interface';

@Injectable()
export class OtpService {
  constructor(
    @Inject('SmsProvider') private readonly smsProvider: SmsProvider,
  ) {}

  async sendOtp(phoneNumber: string): Promise<boolean> {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const message = `Your OTP is: ${otp}`;

    return this.smsProvider.sendSms(phoneNumber, message);
  }
}
