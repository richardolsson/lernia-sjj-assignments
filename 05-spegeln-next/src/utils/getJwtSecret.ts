export default function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('Env variable JWT_SECRET must be set');
  }

  return secret;
}