// import { PrismaClient } from '@prisma/client'
// import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended'

// import { prisma } from './src/database/prismaClient'

// jest.mock('./src/database/prismaClient', () => ({
//   __esModule: true,
//   default: mockDeep<PrismaClient>(),
// }))

// beforeEach(() => {
//   mockReset(prismaMock)
// })

// export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

import { PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';

import { prisma } from './src/database/prismaClient';

jest.mock('./src/database/prismaClient', () => ({
  __esModule: true,
  prisma: mockDeep<PrismaClient>(),
}));

let prismaMock: DeepMockProxy<PrismaClient>;

beforeEach(() => {
  prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;
  mockReset(prismaMock);
});

export { prismaMock };
