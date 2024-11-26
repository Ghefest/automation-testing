import { Semaphore } from 'async-mutex';

class SemaphoreShared {
  accessResource(threadName: string) {
    console.log(`${threadName} has accessed the resource`);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // Simulate resource work
    });
  }
}

class SemaphoreThread {
  private threadName: string;
  private semaphore: Semaphore;
  private resource: SemaphoreShared;

  constructor(
    threadName: string,
    semaphore: Semaphore,
    resource: SemaphoreShared,
  ) {
    this.threadName = threadName;
    this.semaphore = semaphore;
    this.resource = resource;
  }

  async run() {
    try {
      console.log(`${this.threadName} waits`);
      const [, release] = await this.semaphore.acquire();

      try {
        await this.resource.accessResource(this.threadName);
      } finally {
        release();
        console.log(`${this.threadName} released the resource`);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

async function main() {
  const semaphore = new Semaphore(1);
  const resource = new SemaphoreShared();

  const threads = [
    new SemaphoreThread('Thread 1', semaphore, resource),
    new SemaphoreThread('Thread 2', semaphore, resource),
    new SemaphoreThread('Thread 3', semaphore, resource),
    new SemaphoreThread('Thread 4', semaphore, resource),
  ];

  await Promise.all(threads.map((thread) => thread.run()));
}

main();
