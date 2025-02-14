import { Injectable, Inject } from '@nestjs/common';
import { SmsProvider } from './sms/sms.provider.interface';
import { OtpStore } from './otp.store';

@Injectable()
export class OtpService {
    private otpStore = new OtpStore();
  constructor(
    @Inject('SmsProvider') private readonly smsProvider: SmsProvider,
  ) {}

  async sendOtp(phoneNumber: string): Promise<boolean> {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    this.otpStore.setOtp(phoneNumber, otp);

    const message = `Your OTP is: ${otp}`;

    return this.smsProvider.sendSms(phoneNumber, message);
  }

    async verifyOtp(phoneNumber: string, otp: string): Promise<boolean> {
        const storedOtp = this.otpStore.getOtp(phoneNumber);
        if (!storedOtp) {
            return false;
        } else if (storedOtp.otp !== otp) {
            return false;
        } else if (Date.now() > storedOtp.expiresAt) {
            this.otpStore.clearOtp(phoneNumber);
            return false;
        }
        return true;
    }
}
