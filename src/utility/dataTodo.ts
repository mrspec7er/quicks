export interface TodoType {
  id: number;
  title: string;
  date: string;
  completed: boolean;
  description?: string;
  category: TodoCategory;
  sticker?: StickerType[];
}

export interface ApiResponse {
  id: number;
  title: string;
  completed: boolean;
}

export enum TodoCategory {
  ALL,
  PERSONAL,
  URGENT,
}

export enum StickerType {
  IMPORTANT = "Important ASAP",
  OFFLINE = "Offline Meeting",
  VIRTUAL = "Virtual Meeting",
  ASAP = "ASAP",
  CLIENT = "Client Related",
  SELF = "Self Task",
  APPOINTMENTS = "Appointments",
  COURT = "Court Related",
}
