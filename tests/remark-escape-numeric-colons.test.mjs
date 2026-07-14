import assert from "node:assert/strict";
import test from "node:test";

import { escapeNumericColons } from "../src/plugins/remark-escape-numeric-colons.mjs";

test("escapes numeric ratios in prose and image alt text", () => {
	const source = "比例 3:4\n\n![16:9 封面](./cover.webp)";

	assert.equal(
		escapeNumericColons(source),
		"比例 3\\:4\n\n![16\\:9 封面](./cover.webp)",
	);
});

test("does not alter inline or fenced code", () => {
	const source = "`3:4`\n\n```text\n16:9\n```";

	assert.equal(escapeNumericColons(source), source);
});
