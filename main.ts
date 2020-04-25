export function hello(name: string): string {
  return `Hello, ${name}`;
}

if (import.meta.main) {
  const name = Deno.args.length == 0 ? "世界" : Deno.args[0];
  console.log(hello(name));
}
