import browser from "webextension-polyfill";
import lz from "lz-string";

const oldSettings = {
	version: 5,
	options: {
		ignoredDomains: [],
		ignoreCase: false,
		sortByAlpha: false,
	},
	bangs: [
		{
			bang: "g",
			urls: ["https://www.google.com/search?q=%s"],
		},
		{
			bang: "ea",
			urls: [
				"https://www.amazon.com/s?k=%s",
				"https://www.ebay.co.uk/sch/i.html?_nkw=%s",
			],
		},
		{
			bang: "yt",
			urls: ["https://www.youtube.com/results?search_query=%s"],
		},
		{
			bang: "w",
			urls: ["https://en.wikipedia.org/wiki/Special:Search?search=%s"],
		},
		{
			bang: "google",
			urls: ["https://www.google.com/search?q=%s"],
		},
		{
			bang: "gi",
			urls: ["https://google.com/search?tbm=isch&q=%s&tbs=imgo:1"],
		},
		{
			bang: "gm",
			urls: ["https://google.com/maps/place/%s"],
		},
		{
			bang: "wikipedia",
			urls: ["http://en.wikipedia.org/wiki/Special:Search?search=%s&go=Go"],
		},
		{
			bang: "a",
			urls: ["https://www.amazon.com/s?k=%s"],
		},
		{
			bang: "maps",
			urls: ["https://google.com/maps?q=%s"],
		},
		{
			bang: "r",
			urls: ["https://www.reddit.com/search?q=%s"],
		},
	],
};

export default async function setLegacySettings(): Promise<void> {
	const compressedSettings = lz.compressToUTF16(JSON.stringify(oldSettings));
	return browser.storage.sync.set({ settings: compressedSettings });
}
