import { Injectable } from '@nestjs/common';
import { SmsProvider } from './sms.provider.interface';

@Injectable()
export class FakeSmsProvider implements SmsProvider {
  async sendSms(phoneNumber: string, message: string): Promise<boolean> {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    return true;
  }
}
