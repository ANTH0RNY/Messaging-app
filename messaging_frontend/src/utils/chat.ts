export interface ChatType {
	profilePhotoUrl?: string;
	contactName: string;
	lastMsg: string;
	numberOfUnreadMsg?: number;
	lastMsgDate: Date;
}

export const chatItems: ChatType[] = [
	{
		profilePhotoUrl:
			"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		contactName: "Rachel Green",
		lastMsg: "Did you see the latest episode?",
		numberOfUnreadMsg: 6,
		lastMsgDate: new Date("2025-07-24T09:09:30Z"),
	},
	{
		contactName: "John Smith",
		lastMsg: "Are we still meeting for coffee tomorrow?",
		numberOfUnreadMsg: 2,
		lastMsgDate: new Date("2025-04-15T09:23:14"),
	},
	{
		profilePhotoUrl:
			"https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		contactName: "Sarah Johnson",
		lastMsg: "I sent you the report, let me know what you think.",
		numberOfUnreadMsg: 5,
		lastMsgDate: new Date("2025-04-15T08:45:30"),
	},
	{
		contactName: "Dev Team",
		lastMsg: "The deployment was successful!",
		numberOfUnreadMsg: 1,
		lastMsgDate: new Date("2025-04-14T17:12:05"),
	},
	{
		profilePhotoUrl:
			"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		contactName: "Mike Chen",
		lastMsg: "Check out this out",
		numberOfUnreadMsg: 3,
		lastMsgDate: new Date("2025-04-14T15:30:22"),
	},
	{
		contactName: "Mom",
		lastMsg: "Don't forget your sister's birthday next week.",
		numberOfUnreadMsg: 7,
		lastMsgDate: new Date("2025-04-13T20:17:40"),
	},
	{
		profilePhotoUrl:
			"https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		contactName: "Emma Wilson",
		lastMsg: "Thanks for your help with the project!",
		numberOfUnreadMsg: 0,
		lastMsgDate: new Date("2025-04-13T14:05:51"),
	},
	{
		contactName: "Alex Taylor",
		lastMsg: "Are you free this weekend?",
		numberOfUnreadMsg: 4,
		lastMsgDate: new Date("2025-04-12T22:33:10"),
	},
	{
		profilePhotoUrl:
			"https://images.unsplash.com/photo-1611590027211-b954fd027b51?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		contactName: "Work Group",
		lastMsg: "New meeting scheduled for Friday at 2pm.",
		numberOfUnreadMsg: 10,
		lastMsgDate: new Date("2025-04-12T11:20:45"),
	},
	{
		contactName: "David Brown",
		lastMsg: "I'll call you back in 10 minutes.",
		numberOfUnreadMsg: 1,
		lastMsgDate: new Date("2024-12-11T16:42:30"),
	},
];

// const chatItems: ChatType[] = [
//   {
//     contactName: "John Smith",
//     lastMsg: "Are we still meeting for coffee tomorrow?",
//     numberOfUnreadMsg: "2"
//   },
//   {
//     profilePhotoUrl: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     contactName: "Sarah Johnson",
//     lastMsg: "I sent you the report, let me know what you think.",
//     numberOfUnreadMsg: "5"
//   },
//   {
//     contactName: "Dev Team",
//     lastMsg: "The deployment was successful!",
//     numberOfUnreadMsg: "1"
//   },
//   {
//     profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     contactName: "Mike Chen",
//     lastMsg: "Check out this article I found.",
//     numberOfUnreadMsg: "3"
//   },
//   {
//     contactName: "Mom",
//     lastMsg: "Don't forget your sister's birthday next week.",
//     numberOfUnreadMsg: "7"
//   },
//   {
//     profilePhotoUrl: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     contactName: "Emma Wilson",
//     lastMsg: "Thanks for your help with the project!",
//     numberOfUnreadMsg: "0"
//   },
//   {
//     contactName: "Alex Taylor",
//     lastMsg: "Are you free this weekend?",
//     numberOfUnreadMsg: "4"
//   },
//   {
//     profilePhotoUrl: "https://images.unsplash.com/photo-1611590027211-b954fd027b51?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     contactName: "Work Group",
//     lastMsg: "New meeting scheduled for Friday at 2pm.",
//     numberOfUnreadMsg: "10"
//   },
//   {
//     contactName: "David Brown",
//     lastMsg: "I'll call you back in 10 minutes.",
//     numberOfUnreadMsg: "1"
//   },
//   {
//     profilePhotoUrl: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     contactName: "Rachel Green",
//     lastMsg: "Did you see the latest episode?",
//     numberOfUnreadMsg: "6"
//   }
// ];
