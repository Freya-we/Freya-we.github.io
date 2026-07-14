import assert from "node:assert/strict";
import test from "node:test";

import { ImageGridComponent } from "../src/plugins/rehype-component-image-grid.mjs";

const portraitImages = [
	"https://img.picr2.online/1782799804754_image.webp",
	"https://img.picr2.online/1782801278315_36742e4d2078d9a8d3dd32834bea9fab.webp",
	"https://img.picr2.online/1782801227262_90a5bb98f6dd7b807149c6421728746e_720.webp",
];

const landscapeImages = [
	"https://img.picr2.online/1783936315662_5e79ca613f9614110d71ad0706c16fe2_720.webp",
	"https://img.picr2.online/1783936315726_b89ffd27b94a137facd5cc6a7657394f_720.webp",
	"https://img.picr2.online/1783936317427_6dd147bd61f10922e8684849d6b27785.webp",
];

function markdownImages(urls) {
	return urls.map((src, index) => ({
		type: "element",
		tagName: "p",
		properties: {},
		children: [
			{
				type: "element",
				tagName: "img",
				properties: { src, alt: `测试图片 ${index + 1}` },
				children: [],
			},
		],
	}));
}

test("renders portrait images as a three-column gallery with captions", () => {
	const result = ImageGridComponent(
		{ columns: "3", aspect: "3/4" },
		markdownImages(portraitImages),
	);

	assert.equal(result.tagName, "div");
	assert.match(result.properties.style, /--image-grid-columns: 3/);
	assert.match(result.properties.style, /--image-grid-aspect-ratio: 3 \/ 4/);
	assert.equal(result.children.length, 3);
	assert.equal(
		result.children[0].children[0].properties.href,
		portraitImages[0],
	);
	assert.equal(result.children[0].children[1].children[0].value, "测试图片 1");
});

test("uses one Fancybox group per image grid", () => {
	const firstGrid = ImageGridComponent(
		{ aspect: "16/9" },
		markdownImages(landscapeImages),
	);
	const secondGrid = ImageGridComponent(
		{ aspect: "16/9" },
		markdownImages(landscapeImages),
	);

	const firstGroup = firstGrid.children[0].children[0].properties.dataFancybox;
	const secondGroup =
		secondGrid.children[0].children[0].properties.dataFancybox;

	assert.match(firstGroup, /^image-grid-\d+$/);
	assert.notEqual(firstGroup, secondGroup);
	assert.equal(
		firstGrid.children[1].children[0].properties.dataFancybox,
		firstGroup,
	);
});

test("falls back to safe defaults for invalid options", () => {
	const result = ImageGridComponent(
		{ columns: "99", aspect: "broken", fit: "stretch" },
		markdownImages(landscapeImages),
	);

	assert.match(result.properties.style, /--image-grid-columns: 3/);
	assert.match(result.properties.style, /--image-grid-aspect-ratio: 16 \/ 10/);
	assert.match(result.properties.style, /--image-grid-fit: cover/);
});
