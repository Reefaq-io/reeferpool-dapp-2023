import { faker } from '@faker-js/faker/locale/en';
import { IPrediction } from '@/types/prediction';

const { lorem } = faker;

/**
 * Creates a randomized prediction object.
 */
export default function createPrediction(): IPrediction {
  return {
    id: faker.helpers.unique(faker.datatype.number),
    predictionDayPrice: faker.finance.amount(5, 10, 2, '$'),
    predictionFuturePrice: faker.finance.amount(5, 10, 2, '$'),
    predictionMonth: faker.date.month(),
    userComment: lorem.sentence(),
    userName: lorem.word(),
    updated_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
  };
}
