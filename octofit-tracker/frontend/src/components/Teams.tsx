import { CapabilityCard } from './CapabilityCard.js';

type Team = { name: string; mascot?: string; members: Array<string | { name?: string }> };
type TeamResponse = { teams: Team[] };

export default function Teams() {
  return <CapabilityCard<TeamResponse>
    title="Teams"
    description="Manage teams and members."
    path="/api/teams"
    emptyMessage="No teams yet."
    isEmpty={({ teams }) => teams.length === 0}
    renderData={({ teams }) => <ul>{teams.map((team) => <li key={team.name}>
      <strong>{team.name}</strong>{team.mascot ? ` - ${team.mascot}` : ''}
      {team.members.length > 0 && <span> (Members: {team.members.map((member) => typeof member === 'string' ? member : member.name ?? 'Team member').join(', ')})</span>}
    </li>)}</ul>}
  />;
}
