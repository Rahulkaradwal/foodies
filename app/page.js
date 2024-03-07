import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals"> Meal 1</Link>
      </p>
      <p>
        <Link href="/community">Meal 2</Link>
      </p>
      <p>
        <Link href="/meals/share"> Meal 3</Link>
      </p>
      <p>
        <Link href="/meals/mealdetails"> Meal 3</Link>
      </p>
    </main>
  );
}
