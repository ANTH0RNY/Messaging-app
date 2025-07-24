export type UserType = {
	username: string;
	userId: string;
	profilePhotoUrl?: string;
};
export type MessageType = {
	messageId: string;
	sender: UserType;
	recipient: UserType;
	body: string;
	attachment?: string;
	date: string
};

export const messages: MessageType[] = [
	{
		messageId: "msg-001",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Hey Bob!",
		date: "2025-07-24T09:00:00Z"
	},
	{
		messageId: "msg-002",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Hey Alice, how's it going?",
		date: "2025-07-24T09:01:00Z"
	},
	{
		messageId: "msg-003",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "All good here, just working on the project.",
		date: "2025-07-24T09:02:30Z"
	},
	{
		messageId: "msg-004",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Nice! Need any help with it?",
		date: "2025-07-24T09:03:10Z"
	},
	{
		messageId: "msg-005",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Maybe later, thanks!",
		date: "2025-07-24T09:04:00Z"
	},
	{
		messageId: "msg-006",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Alright, just let me know.",
		date: "2025-07-24T09:05:00Z"
	},
	{
		messageId: "msg-007",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Will do. By the way, are you free this weekend?",
		date: "2025-07-24T09:06:30Z"
	},
	{
		messageId: "msg-008",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Yeah, I should be. What's up?",
		date: "2025-07-24T09:07:10Z"
	},
	{
		messageId: "msg-009",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Thinking of grabbing lunch on Saturday.",
		date: "2025-07-24T09:08:00Z"
	},
	{
		messageId: "msg-010",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Sounds good! Count me in.",
		date: "2025-07-24T09:09:30Z"
	},
	{
		messageId: "msg-011",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Awesome, see you at noon?",
		date: "2025-07-24T09:10:30Z"
	},
	{
		messageId: "msg-012",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Yep! I’ll meet you at the café on 5th.",
		date: "2025-07-24T09:11:10Z"
	},
	{
		messageId: "msg-013",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Perfect. I’ll bring the project docs too.",
		date: "2025-07-24T09:12:00Z"
	},
	{
		messageId: "msg-014",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Great. We can review it over coffee.",
		date: "2025-07-24T09:13:00Z"
	},
	{
		messageId: "msg-015",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "BTW, did you fix the bug in the auth flow?",
		date: "2025-07-24T09:15:20Z"
	},
	{
		messageId: "msg-016",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Yep, pushed the fix this morning.",
		date: "2025-07-24T09:16:05Z"
	},
	{
		messageId: "msg-017",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Awesome, I’ll pull and test it tonight.",
		date: "2025-07-24T09:16:45Z"
	},
	{
		messageId: "msg-018",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Thanks! Let me know if anything breaks 😅",
		date: "2025-07-24T09:17:20Z"
	},
	{
		messageId: "msg-019",
		sender: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Haha, fingers crossed!",
		date: "2025-07-24T09:18:10Z"
	},
	{
		messageId: "msg-020",
		sender: {
			username: "Bob",
			userId: "2",
			profilePhotoUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		recipient: {
			username: "Alice",
			userId: "1",
			profilePhotoUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		},
		body: "Catch you later then!",
		date: "2025-07-24T09:19:00Z"
	},
];

