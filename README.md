# OTP Microservice with NestJS and GraphQL

This project demonstrates a basic OTP (One Time Password) microservice built with NestJS, GraphQL, and a pluggable SMS provider interface. It currently uses an in-memory OTP store and a fake SMS provider for development purposes. Later stages can integrate a real SMS provider (e.g., Twilio, MSG91, or Plivo) and a persistent OTP store (e.g., Redis or a database).

## Features

- **Send OTP Mutation**  
  Generate a random 6-digit OTP, store it in an in-memory store, and simulate sending the OTP via a fake SMS provider.

- **Verify OTP Mutation**  
  Validate that the provided OTP matches the stored OTP for a phone number and ensure the OTP hasn’t expired.

- **GraphQL API**  
  Exposes a simple GraphQL API using the Apollo driver for mutations and queries.

## Project Structure

```
src/
├── app.module.ts                # Root module and GraphQL configuration
├── otp/
│   ├── dto/
│   │   ├── send-otp.input.ts    # Input DTO for sending OTP
│   │   ├── send-otp.response.ts # Response DTO for sending OTP
│   │   ├── verify-otp.input.ts  # Input DTO for verifying OTP
│   │   └── verify-otp.response.ts # Response DTO for verifying OTP
│   ├── otp.resolver.ts          # GraphQL resolver for OTP mutations
│   ├── otp.service.ts           # OTP business logic and store operations
│   ├── otp.store.ts             # Simple in-memory store for OTPs
│   └── sms/
│       └── sms.provider.interface.ts   # Interface for SMS Provider
│       └── fake.sms.provider.ts          # Fake SMS provider implementation
└── main.ts                      # Application bootstrap code
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v22 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/skr2270/phone_auth.git
   cd phone_auth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Application

Start the development server:

```bash
npm run start:dev
```

The application will start on [http://localhost:3000](http://localhost:3000).  
GraphQL Playground is available at [http://localhost:3000/graphql](http://localhost:3000/graphql).

## Testing the GraphQL API

### Send OTP

Use the following mutation to send an OTP (check your console for the OTP):

```graphql
mutation {
  sendOtp(input: { phoneNumber: "+1234567890" }) {
    success
  }
}
```

### Verify OTP

To verify the OTP, use the mutation. Replace the otp value with the OTP received in the console:

```graphql
mutation {
  verifyOtp(input: { phoneNumber: "+1234567890", otp: "626171" }) {
    verified
  }
}
```

### Dummy Query

If you need a query endpoint for health check or to satisfy GraphQL schema requirements, add a dummy query:

```graphql
query {
  dummyQuery
}
```

Response example:

```json
{
  "data": {
    "dummyQuery": "GraphQL API is alive!"
  }
}
```

## Future Improvements

- **Persistent OTP Storage**: Replace the in-memory store with Redis or a database for production use.
- **Real SMS Provider Integration**: Integrate a real SMS provider (e.g., Twilio, MSG91, or Plivo).
- **Input Validations**: Use validation pipes or class-validator to validate phone numbers.
- **Error Handling & Logging**: Add robust error handling and production-level logging.
- **Rate Limiting**: Implement rate limiting to prevent abuse.
