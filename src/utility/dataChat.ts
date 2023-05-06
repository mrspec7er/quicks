export interface MessageType {
  id: number;
  name: string;
  message: string;
  date: string;
  time: string;
  userID: number;
  readStatus: boolean;
  reply?: string;
}

export interface GroupType {
  id: number;
  profile: string;
  name: string;
  sender?: string;
  lastMessage: string;
  date: string;
  newMessage: boolean;
}

export const groupData: GroupType[] = [
  {
    date: "05-05-2023",
    id: 1,
    lastMessage: "Please check this out!",
    name: "109220-Naturalization",
    newMessage: true,
    profile: "/profile-group.png",
    sender: "Cameron Phillips",
  },
  {
    date: "07-05-2023",
    id: 2,
    lastMessage: "Het there! Welcome to your inbox.",
    name: "FastVisa Support",
    newMessage: false,
    profile: "/profile-f.png",
  },
];

export const chatsRoom1: MessageType[] = [
  {
    id: 1,
    name: "Marry Hilda",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nihil laudantium perspiciatis.",
    date: "May 03, 2023",
    time: "16:32",
    userID: 2,
    readStatus: true,
  },
  {
    id: 2,
    name: "You",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga provident soluta similique minus explicabo aliquid.",
    date: "May 03, 2023",
    time: "16:35",
    userID: 1,
    readStatus: true,
  },
  {
    id: 3,
    name: "Marry Hilda",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut architecto, accusantium minima culpa ut ipsum magni.",
    date: "May 03, 2023",
    time: "16:42",
    userID: 2,
    readStatus: true,
  },
  {
    id: 4,
    name: "You",
    message: "Lorem, ipsum dolor.",
    date: "May 05, 2023",
    time: "16:42",
    userID: 1,
    readStatus: true,
  },
  {
    id: 5,
    name: "Obaidullah Amarkhil",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    date: "May 05, 2023",
    time: "16:42",
    userID: 3,
    readStatus: true,
  },
  {
    id: 6,
    name: "Marry Hilda",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, harum!",
    date: "May 05, 2023",
    time: "16:42",
    userID: 2,
    readStatus: false,
  },
  {
    id: 7,
    name: "Obaidullah Amarkhil",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut architecto, accusantium minima culpa ut ipsum magni.",
    date: "May 05, 2023",
    time: "16:42",
    userID: 3,
    readStatus: false,
  },
];

export const chatsRoom2: MessageType[] = [
  {
    id: 1,
    name: "FastVisa SUpport",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolor natus architecto.",
    date: "May 05, 2023",
    time: "16:32",
    userID: 2,
    readStatus: true,
  },
  {
    id: 2,
    name: "You",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti ducimus consequuntur ad officiis officia. Nisi iusto accusamus id. Et?",
    date: "May 05, 2023",
    time: "16:35",
    userID: 1,
    readStatus: true,
  },
  {
    id: 3,
    name: "FastVisa SUpport",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non assumenda, cupiditate dicta totam, magnam numquam dolorum nesciunt accusantium eius laboriosam neque commodi tempora. Quis reiciendis similique delectus illum exercitationem. Praesentium.",
    date: "May 05, 2023",
    time: "16:32",
    userID: 2,
    readStatus: false,
  },
];
