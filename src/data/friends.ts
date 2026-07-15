// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "诗雨小栈",
		imgurl: "https://czxh.top/assets/home/c0101.webp",
		desc: "Mitunlny & Pr0mis3 的个人博客",
		siteurl: "https://czxh.top/",
		tags: ["博客"],
	},
	{
		id: 2,
		title: "Fisssssh 的个人博客",
		imgurl:
			"https://fisssssh.top/wp-content/uploads/2026/02/d5cdb2bc096ffa54d2d05a95df0364c9-300x300.jpg",
		desc: "探索未知",
		siteurl: "https://fisssssh.top/",
		tags: ["博客"],
	},
	{
		id: 3,
		title: "JiuCheng's BLOG",
		imgurl: "https://tgvhzg.github.io/pic/head1.jpg",
		desc: "记录 CTF、Misc、工具和安全学习笔记",
		siteurl: "https://tgvhzg.github.io/",
		tags: ["CTF", "安全"],
	},
	{
		id: 4,
		title: "Ka1saaa's Blog",
		imgurl: "https://ka1saaa.github.io/img/img5.jpg",
		desc: "一位 Misc 小子的随笔",
		siteurl: "https://ka1saaa.github.io/",
		tags: ["Misc", "随笔"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
