export default function(name?: string): string {
  if (name) {
    return `Hello ${name}. I am a cat.`;
  }
  return 'I am a cat.';
}
