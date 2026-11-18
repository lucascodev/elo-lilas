import { SAFETY_CHECKLIST } from "../../constants/safety-checklist.constant";
import { ChecklistGroup } from "./components/checklist-group/checklist-group";

export function SafetyChecklist() {
  return (
    <form aria-label="Checklist do plano de segurança" autoComplete="off" className="grid gap-4 md:grid-cols-2 md:gap-5">
      {SAFETY_CHECKLIST.map((group) => (
        <ChecklistGroup key={group.id} groupId={group.id} title={group.title} items={group.items} />
      ))}
    </form>
  );
}
