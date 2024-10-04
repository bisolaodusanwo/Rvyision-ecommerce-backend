import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisUrl = `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${process.env.REDIS_PORT || 6379}`;

console.log("Connecting to Redis at:", redisUrl);

const redisClient = redis.createClient({
  url: redisUrl,
});

redisClient.on("error", (err) => {
  console.error("Redis error: ", err);
});

async function connectRedis() {
  try {
    await redisClient.connect();
    console.log("Connected to Redis");
  } catch (err) {
    console.error("Failed to connect to Redis:", err);
  }
}

export { redisClient, connectRedis };
