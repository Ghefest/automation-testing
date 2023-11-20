import { sleep } from '../../utils';
import { arraySum } from './array-sum';
import { throwException } from './exception';
import { treeMap } from './tree-map';

async function bootstrap() {
  await arraySum();

  await sleep(4000);

  try {
    throwException();
  } catch (error) {
    console.error(error);
  }

  treeMap();
}

bootstrap();
