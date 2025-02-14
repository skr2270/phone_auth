export interface SmsProvider {
    sendSms(phoneNumber: string, message: string): Promise<boolean>;
  }
  