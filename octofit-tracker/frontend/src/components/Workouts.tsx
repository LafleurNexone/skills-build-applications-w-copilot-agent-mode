import { CapabilityCard } from './CapabilityCard.js';

type WorkoutSuggestion = { title: string; focus?: string; reason?: string };
type WorkoutResponse = { suggestions: WorkoutSuggestion[] };

export default function Workouts() {
  return <CapabilityCard<WorkoutResponse>
    title="Workout suggestions"
    description="Recommend workouts from activity patterns."
    path={`/api/workouts/suggestions/${encodeURIComponent('mona@example.com')}`}
    emptyMessage="No workout suggestions are available."
    isEmpty={({ suggestions }) => suggestions.length === 0}
    renderData={({ suggestions }) => <ul>{suggestions.map((suggestion) => <li key={suggestion.title}>
      <strong>{suggestion.title}</strong>
      {suggestion.focus && <span> - {suggestion.focus}</span>}
      {suggestion.reason && <p>{suggestion.reason}</p>}
    </li>)}</ul>}
  />;
}
