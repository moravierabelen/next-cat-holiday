import "./App.css";
import { HOLIDAYS } from "./data/holidays";
import { dateDiffInDays } from "./helpers/daysDiff";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const today = new Date();

const nextHoliday = HOLIDAYS.find(
  (holiday) => new Date(holiday.date) > today
) || {
  ...HOLIDAYS[0],
  date: new Date(
    new Date(HOLIDAYS[0].date).getFullYear() + 1,
    new Date(HOLIDAYS[0].date).getMonth(),
    new Date(HOLIDAYS[0].date).getDate() + 1
  ),
};

const daysDiff = dateDiffInDays(today, nextHoliday.date);

const rtf = new Intl.RelativeTimeFormat("es-AR", { numeric: "auto" });

function App() {
  jsConfetti.addConfetti(), 2000;

  return (
    <main>
      <h1>{nextHoliday.name}</h1>
      <h2>
        {nextHoliday.date.toLocaleDateString()} ({rtf.format(daysDiff, "day")})
      </h2>
    </main>
  );
}

export default App;
