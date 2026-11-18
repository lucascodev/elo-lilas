import type { HelpChannel } from "../../domain/entities/help-channel.entity";
import type { HelpChannelRecord } from "../types/help-channel-record.type";

export function mapHelpChannelRecordToEntity(record: HelpChannelRecord): HelpChannel {
  return {
    id: record.id,
    shortName: record.short_name,
    label: record.label,
    description: record.description,
    contactKind: record.contact.kind,
    contactValue: record.contact.value,
    isEmergency: record.emergency,
    showInEmergencyBar: record.emergency_bar,
    protectsChildren: record.children,
    order: record.order,
  };
}
