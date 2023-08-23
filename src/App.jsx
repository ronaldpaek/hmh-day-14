import { Section, Box, Input, Counter, Timer } from "./components";
import "./App.css";
import RaceCar from "./components/RaceCar";

function App() {
  return (
    <>
      <h1>Day 10</h1>
      <main className="card">
        <Section title="Toggle the Box">
          <Box />
        </Section>
        <Section title="Mirror">
          <Input />
        </Section>
        <Section title="Counter">
          <Counter />
        </Section>
        <Section title="Race">
          <p>Move car to the right by pressing the right arrow</p>
          <RaceCar />
        </Section>
        <Section title="Stopwatch">
          <Timer />
        </Section>
      </main>
    </>
  );
}

export default App;
