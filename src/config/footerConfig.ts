import type { FooterConfig } from "../types/config";

// 页脚配置
export const footerConfig: FooterConfig = {
	enable: true, // 启用自定义页脚信息
	customHtml: "© Freya · CTF 与安全学习记录",
	// 也可以直接编辑 FooterConfig.html 文件来添加备案号等自定义内容
	// 注意：若 customHtml 不为空，则使用 customHtml 中的内容；若 customHtml 留空，则使用 FooterConfig.html 文件中的内容
	// FooterConfig.html 可能会在未来的某个版本弃用
};

