import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
@Query(() => String, { name: 'dummyQuery' })
dummyQuery(): string {
return 'GraphQL API is alive!';
}
}