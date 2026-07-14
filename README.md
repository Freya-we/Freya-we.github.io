# Freya's Blog

Freya 的个人技术博客，基于 [Astro](https://astro.build/) 和 [Mizuki](https://github.com/LyraVoid/Mizuki) 构建。

## 本地开发

需要 Node.js 22+ 和 pnpm。

```bash
pnpm install
pnpm dev
```

本地访问 `http://localhost:3000`。

## 写文章

```bash
pnpm new-post article-name
```

文章位于 `src/content/posts/`。完成后运行：

```bash
pnpm build
```

推送到 `main` 分支后，GitHub Actions 会构建网站并发布到 `gh-pages` 分支。

线上地址：<https://freya-we.github.io/>
