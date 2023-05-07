import { StickerType } from "./dataTodo";

function getStickerColor(label: StickerType) {
  if (label === StickerType.IMPORTANT) {
    return "stickersGray";
  }
  if (label === StickerType.OFFLINE) {
    return "stickersChoco";
  }
  if (label === StickerType.VIRTUAL) {
    return "stickersLightChoco";
  }
  if (label === StickerType.ASAP) {
    return "stickersGreen";
  }
  if (label === StickerType.CLIENT) {
    return "stickersLightGreen";
  }
  if (label === StickerType.SELF) {
    return "stickersPurple";
  }
  if (label === StickerType.APPOINTMENTS) {
    return "stickersPink";
  }
  if (label === StickerType.COURT) {
    return "stickersGreen";
  }
}

export default getStickerColor;
