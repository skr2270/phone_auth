interface OtpData {
    otp: string;
    expiresAt: number;
    }
    
    export class OtpStore {
    private store = new Map<string, OtpData>();
    
    setOtp(phoneNumber: string, otp: string, ttl: number = 5 * 60 * 1000) {
    const expiresAt = Date.now() + ttl;
    this.store.set(phoneNumber, { otp, expiresAt });
    }
    
    getOtp(phoneNumber: string): OtpData | undefined {
    return this.store.get(phoneNumber);
    }
    
    clearOtp(phoneNumber: string): void {
    this.store.delete(phoneNumber);
    }
    }